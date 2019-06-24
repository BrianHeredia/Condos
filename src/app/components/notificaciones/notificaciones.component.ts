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
  private idgrupo;
  private uid;
  private i: number;
  private notificacion: FormGroup;
  private Notificacion: Notificacion;
  private notificaciones = [];
  constructor(
    private route: ActivatedRoute,
    public modalService: ModalService,
    private dataService: DataService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.uid = this.route.snapshot.params['uid'];
    this.idgrupo = this.route.snapshot.params['idgrupo'];
    this.notificacion = this.fb.group({
      título: new FormControl(),
      mensaje: new FormControl(),
    });

    this.getNotificaciones();

  }


  openModal(id: string) {
    this.modalService.open(id);
  }


  closeModal(id: string) {
    this.modalService.close(id);
  }

  addNotificacion(id: string) {
    this.Notificacion = this.notificacion.value;
    this.Notificacion.isAR = false;
    this.Notificacion.idgrupo = this.idgrupo;
    this.Notificacion.uid = this.uid;   
    this.dataService.addNotificaciones(this.Notificacion).subscribe();
    this.closeModal(id);
  }

  getNotificaciones() {
    this.dataService.getNotificaciones(this.idgrupo,this.uid).subscribe(notificaciones => {
      this.notificaciones = notificaciones;
    })
  }


}
