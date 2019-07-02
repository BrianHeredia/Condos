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
        Validators.required,
        Validators.pattern("[-+]?[0-9]*[.]?[0-9]+")
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

  format(str: string){
    if(str.length == 1){
      this.pago.get('monto').setValue('0.0'+str);
    }
    if(str.slice(1,2) == '.' && str.slice(0,1) == '0' && str.length > 4){
      var str1: string;
      str1 = str.slice(2);
      str1 = str1.slice(0,1) + '.' + str1.slice(1);
      this.pago.get('monto').setValue(str1);
    }
    if(str.length > 4 && str.slice(0,1) != '0'){
      var str3: string;
      str3 =  str.slice(0,str.length-4) + str.slice(str.length-3);
      str3 = str3.slice(0,str3.length-2)+ '.' + str3.slice(str3.length-2);
      this.pago.get('monto').setValue(str3);
    }
    if(str.slice(str.length-2,str.length-1) == '.'){
      var str4: string;
      str4 = str.slice(0,str.length-2) + str.slice(str.length-1);
      str4 = str4.slice(0,str4.length-2)+ '.' + str4.slice(str4.length-2);
      this.pago.get('monto').setValue(str4);
    }
    if(str.length == 3){
      var str2: string;
      str2 = '0.' + str.slice(0,1) + str.slice(2);
      this.pago.get('monto').setValue(str2);
    }
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
      if( pago ){
        this.pagos.push(pago); 
      }
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
        }
      }
      this.deudaActual.toFixed(2);
    });
  }

  getPagos(){
    this.dataService.getPagosUser(this.idgrupo,this.uid).subscribe(pagos =>{
      this.pagos = pagos;
    });
  }

  selectRecibo(id: number){
    this.currentPago = id;
  }

}
