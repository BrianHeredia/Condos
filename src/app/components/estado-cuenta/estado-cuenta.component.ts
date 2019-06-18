import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { Gasto } from '../../models/gasto';
import { Entrada } from '../../models/entradas';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.css']
})
export class EstadoCuentaComponent implements OnInit {
  private idgrupo;
  private uid;
  private Gasto: Gasto;
  private gasto: FormGroup;
  private gastos = [];
  private pagos = [];
  private mes: FormGroup;
  private gastosTotal: number;
  private pagosTotal: number;
  private balance;
  private positivo: boolean = true;
  private admin: boolean = false;
  constructor(
    private route: ActivatedRoute,
    public modalService: ModalService,
    private dataService: DataService,
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    this.uid = this.route.snapshot.params['uid'];
    this.idgrupo = this.route.snapshot.params['idgrupo'];
    this.dataService.getUserGrupo(this.idgrupo).subscribe( user =>{
      this.admin = user.admin;
    });
    this.gasto = this.fb.group({
      desc: ['', [
        Validators.required
      ]],
      monto: ['', [
        Validators.required
      ]],
      date: ['', [
        Validators.required
      ]]
    });
    this.mes = this.fb.group({
      month:['',[]]
    });
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  getEntradas(){

    this.dataService.getPagos(this.idgrupo,this.mes.value.month).subscribe(pagos =>{
      this.pagos = pagos;
      console.log(pagos);
      this.pagosTotal = 0;
      for (let index = 0; index < this.pagos.length; index++) {
        this.pagosTotal = this.pagosTotal + parseFloat(this.pagos[index].monto);
        }
      this.dataService.getGastos(this.idgrupo,this.mes.value.month).subscribe( gastos=>{
        this.gastos = gastos;
        console.log(gastos);
        this.gastosTotal = 0;
        for (let index = 0; index < this.gastos.length; index++) {
          this.gastosTotal = this.gastosTotal + parseFloat(this.gastos[index].monto);
        }
        this.balance = (this.pagosTotal - this.gastosTotal).toFixed(2);
        if( (this.pagosTotal - this.gastosTotal) >= 0 ){
          this.positivo = true;
        }
        else{
          this.positivo = false;
        }
      });
    });
  }

  confirmGasto(id: string){
    this.Gasto = this.gasto.value;
    this.Gasto.uid = this.uid;
    this.Gasto.idgrupo = this.idgrupo;
    this.dataService.addGasto(this.Gasto).subscribe();
    this.closeModal(id);
  }
}
