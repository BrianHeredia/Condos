import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pago } from '../../models/pago';
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
    this.dataService.addPago(this.Pago).subscribe();
    this.closeModal(id);
  }

  getRecibos(){
    this.dataService.getRecibos(this.idgrupo,this.uid).subscribe(recibos =>{
      this.recibos = recibos;
      console.log(recibos);
    });
  }

  getPagos(){
    this.dataService.getPagosUser(this.idgrupo,this.uid).subscribe(pagos =>{
      this.pagos = pagos;
      console.log(pagos);
    });
  }

}
