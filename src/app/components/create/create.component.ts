import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { DataService } from '../../services/data.service';
import { UsuarioGrupo } from '../../models/usuario-grupo';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  group: FormGroup;
  groupUser: FormGroup;
  public uid;
  constructor(
    public fb: FormBuilder,
    public route: ActivatedRoute,
    public router: Router,
    public flashMensaje: FlashMessagesService,
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.uid = this.route.snapshot.params['uid'];
    this.group = this.fb.group({
      nombre: ['', [
        Validators.required
      ]],
      direccion: ['', [
        Validators.required
      ]],
      codigo: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]]
    })
    this.groupUser = this.fb.group({
      alicuota: ['', [
        Validators.required,
        Validators.pattern("^[0-9](\.[0-9]+)?$")
      ]],
      unidad: ['', [
        Validators.required
      ]]
    })
  }

  format(str: string){
    if(str.length == 1){
      this.groupUser.get('alicuota').setValue('0.0'+str);
    }
    if(str.slice(1,2) == '.' && str.slice(0,1) == '0' && str.length > 4){
      var str1: string;
      str1 = str.slice(2);
      str1 = str1.slice(0,1) + '.' + str1.slice(1);
      this.groupUser.get('alicuota').setValue(str1);
    }
    if(str.length > 4 && str.slice(0,1) != '0'){
      this.groupUser.get('alicuota').setValue(str.slice(0,4));
    }
    if(str.length == 3){
      var str2: string;
      str2 = '0.' + str.slice(0,1) + str.slice(2);
      this.groupUser.get('alicuota').setValue(str2);
    }
  }

  ToDataBase() {
    this.dataService.userGroup = new UsuarioGrupo;
    this.dataService.userGroup.alicuota = this.groupUser.value.alicuota;
    this.dataService.userGroup.unit = this.groupUser.value.unidad;
    this.dataService.userGroup.uid = localStorage.currentUserID;
    this.dataService.addGrupo(this.group.value).subscribe((group)=>{
      this.dataService.userGroup.idgrupo = group.idgrupo;
        if( group ){
          localStorage.joinGroup = group;
        }
      this.dataService.addUserGrupos(this.dataService.userGroup).subscribe((group)=>{
        this.dataService.userGroup.idgrupo = group.idgrupo;
          if( group ){
            this.router.navigate(['/'+this.uid]);
          }
        });
    });
  }

}
