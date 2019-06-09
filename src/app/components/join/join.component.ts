import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';
import { DataService } from '../../services/data.service';
import { UsuarioGrupo } from '../../models/usuario-grupo';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  join: FormGroup;
  constructor(
    private fb: FormBuilder,
    public router: Router,
    public flashMensaje: FlashMessagesService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.join = this.fb.group({
      codigo: ['', [
        Validators.required
      ]],
      alicuota: ['', [
        Validators.required
      ]],
      unit: ['', [
        Validators.required
      ]]
    });
  }

  ToDataBase() {
    this.dataService.userGroup = new UsuarioGrupo;
    this.dataService.userGroup.codigo = this.join.value.codigo;
    this.dataService.userGroup.alicuota = this.join.value.alicuota;
    this.dataService.userGroup.unit = this.join.value.unit;
    this.dataService.userGroup.uid = localStorage.currentUserID;
    this.dataService.joinGroup(this.dataService.userGroup).subscribe();
    this.router.navigate(['/']);
  }

  get alicuota() {
    return this.join.get('alicuota');
  }

  get unit() {
    return this.join.get('unit');
  }

  get codigo() {
    return this.join.get('nombre');
  }
}
