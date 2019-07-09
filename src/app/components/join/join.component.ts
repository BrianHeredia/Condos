import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { DataService } from '../../services/data.service';
import { UsuarioGrupo } from '../../models/usuario-grupo';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  public uid;
  join: FormGroup;
  constructor(
    public fb: FormBuilder,
    public route: ActivatedRoute,
    public router: Router,
    public flashMensaje: FlashMessagesService,
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.uid = this.route.snapshot.params['uid'];
    this.join = this.fb.group({
      codigo: ['', [
        Validators.required
      ]],
      alicuota: ['', [
        Validators.required,
        Validators.pattern("^[0-9](\.[0-9]+)?$")
      ]],
      unit: ['', [
        Validators.required
      ]]
    });
  }

  format(str: string){
    if(str.length == 1){
      this.join.get('alicuota').setValue('0.0'+str);
    }
    if(str.slice(1,2) == '.' && str.slice(0,1) == '0' && str.length > 4){
      var str1: string;
      str1 = str.slice(2);
      str1 = str1.slice(0,1) + '.' + str1.slice(1);
      this.join.get('alicuota').setValue(str1);
    }
    if(str.length > 4 && str.slice(0,1) != '0'){
      this.join.get('alicuota').setValue(str.slice(0,4));
    }
    if(str.length == 3){
      var str2: string;
      str2 = '0.' + str.slice(0,1) + str.slice(2);
      this.join.get('alicuota').setValue(str2);
    }
  }

  ToDataBase() {
    this.dataService.userGroup = new UsuarioGrupo;
    this.dataService.userGroup.codigo = this.join.value.codigo;
    this.dataService.userGroup.alicuota = this.join.value.alicuota;
    this.dataService.userGroup.unit = this.join.value.unit;
    this.dataService.userGroup.uid = localStorage.currentUserID;
    this.dataService.joinGroup(this.dataService.userGroup).subscribe( res => {
      if( res ){
        this.router.navigate(['/'+this.uid]);
      }
    });
  }
}
