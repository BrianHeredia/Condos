import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlName, SelectControlValueAccessor } from '@angular/forms';
import { Notificacion } from '../../models/notificaciones';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
  public idgrupo;
  public uid;
  public noti: Notificacion;
  public notificacion: FormGroup;
  public Notificacion: Notificacion;
  public notificaciones = [];
  constructor(
    public route: ActivatedRoute,
    public modalService: ModalService,
    public dataService: DataService,
    public fb: FormBuilder 
  ) {  }

  ngOnInit() {
    this.uid = this.route.snapshot.params['uid'];
    this.idgrupo = this.route.snapshot.params['idgrupo'];
    this.notificacion = this.fb.group({
      titulo: ['', [
        Validators.required
      ]],
      mensaje:  ['', [
        Validators.required
      ]],
      isAR: ['', [
        Validators.required
      ]]
    });
    this.getNotificaciones();
  }


  openModal(id: string) {
    this.modalService.open(id);
  }


  closeModal(id: string) {
    this.modalService.close(id);
  }

  selectNoti(noti: Notificacion) {
    this.noti = new Notificacion;
    this.noti = noti;
    console.log(this.noti);
  }

  addNotificacion(id: string) {
    this.Notificacion = this.notificacion.value;
    this.Notificacion.idgrupo = this.idgrupo;
    this.Notificacion.uid = this.uid;  
    console.log(this.Notificacion); 
    this.dataService.addNotificaciones(this.Notificacion).subscribe( res => {
      if( res ){
        this.notificaciones.push(res); 
      }
    });
    this.closeModal(id);
  }

  getNotificaciones() {
    this.dataService.getNotificaciones(this.idgrupo).subscribe(notificaciones => {
      this.notificaciones = notificaciones;
      console.log(this.notificaciones);
    });
  }


}
