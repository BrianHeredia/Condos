import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pago } from '../../models/pago';
import { Recibos } from '../../models/recibos';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.css']
})
export class FinanzasComponent implements OnInit {
  private idgrupo;
  private uid;
  private pago: FormGroup;
  private Pago: Pago;
  private recibos = [];
  private pagos = [];
  private currentPago;
  private idRecibo: Recibos;
  private deudaActual: number;
  constructor(
    private route: ActivatedRoute,
    public modalService: ModalService,
    private fb: FormBuilder,
    private dataService: DataService
) { }

  ngOnInit() {
    this.uid = this.route.snapshot.params['uid'];
    this.idgrupo = this.route.snapshot.params['idgrupo'];
    this.pago = this.fb.group({
      ref: ['', [
        Validators.required
      ]],
      monto: ['', [
        Validators.required
      ]],
      date: ['', [
        Validators.required
      ]],
      banco: ['', [
        Validators.required
      ]]
    });
    this.getRecibos();
    this.getPagos();
  }

  openModal(id: string) {
    this.modalService.open(id);
  }


  closeModal(id: string) {
    this.modalService.close(id);
  }

  confirmPayment(id: string){
    this.Pago = this.pago.value;
    this.Pago.uid = this.uid;
    this.Pago.idgrupo = this.idgrupo;
    this.Pago.recibo = this.currentPago;
    this.idRecibo = new Recibos;
    this.idRecibo.id = this.currentPago;
    this.dataService.addPago(this.Pago).subscribe(pago =>{
      this.dataService.updateRecibo(this.idRecibo).subscribe();
    });
    this.closeModal(id);
  }

  getRecibos(){
    this.deudaActual = 0;
    this.dataService.getRecibos(this.idgrupo,this.uid).subscribe(recibos =>{
      this.recibos = recibos;
      for (let index = 0; index < this.recibos.length; index++) {
        if(!this.recibos[index].pagado){
          this.deudaActual = this.deudaActual + parseFloat(this.recibos[index].monto);
          console.log(this.deudaActual);
        }
      }
      this.deudaActual.toFixed(2);
      console.log(recibos);
    });
  }

  getPagos(){
    this.dataService.getPagosUser(this.idgrupo,this.uid).subscribe(pagos =>{
      this.pagos = pagos;
      console.log(pagos);
    });
  }

  selectRecibo(id: number){
    this.currentPago = id;
  }

}
