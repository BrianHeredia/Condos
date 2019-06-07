import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

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
  constructor(
    private fb: FormBuilder,
    public router: Router,
    public flashMensaje: FlashMessagesService,
    private dataService: DataService
  ) { }

  ngOnInit() {
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
        Validators.required
      ]],
      unidad: ['', [
        Validators.required
      ]]
    })
  }

  ToDataBase() {
    this.dataService.userGroup = new UsuarioGrupo;
    this.dataService.userGroup.alicuota = this.groupUser.value.alicuota;
    this.dataService.userGroup.unit = this.groupUser.value.unidad;
    this.dataService.userGroup.uid = this.dataService.user.uid;
    this.dataService.addGrupo(this.group.value).subscribe((group)=>{
      this.dataService.userGroup.idgrupo = group.idgrupo;
      this.dataService.addUserGrupos(this.dataService.userGroup).subscribe();
    });
    this.router.navigate(['/']);
  }


  get email() {
    return this.groupUser.get('alicuota');
  }

  get password() {
    return this.groupUser.get('unidad');
  }

  get first() {
    return this.group.get('nombre');
  }

  get last() {
    return this.group.get('direccion');
  }

  get cedula() {
    return this.group.get('codigo');
  }
}
