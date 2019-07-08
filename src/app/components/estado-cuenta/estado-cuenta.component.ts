import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { Gasto } from '../../models/gasto';
import { Recibos } from '../../models/recibos';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  private recibos = [];
  private mes: FormGroup;
  private gastosTotal: number;
  private pagosTotal: number;
  private balance;
  private positivo: boolean = true;
  private admin: boolean = false;
  private selectedMonth;
  private selectedYear;
  private currentYear;
  private lastYear;
  constructor(
    private route: ActivatedRoute,
    public modalService: ModalService,
    private dataService: DataService,
    private fb : FormBuilder,
    public router: Router
  ) { }

  ngOnInit() {
    this.uid = this.route.snapshot.params['uid'];
    this.idgrupo = this.route.snapshot.params['idgrupo'];
    this.dataService.getUserGrupo(this.idgrupo).subscribe( user =>{
      this.admin = user.admin;
    });
    const fecha = new Date();
    this.currentYear = fecha.getFullYear();
    this.lastYear = this.currentYear - 1;
    this.gasto = this.fb.group({
      desc: ['', [
        Validators.required
      ]],
      monto: ['', [
        Validators.required,
        Validators.pattern("[-+]?[0-9]*[.]?[0-9]+")
      ]],
      month: ['', [
        Validators.required
      ]],
      year: ['', [
        Validators.required,

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

  selectedYM(){
    const fecha = new Date();
    this.selectedMonth = parseInt(this.mes.value.month);
    console.log(this.selectedMonth);
    if(fecha.getMonth() + 1 >= this.selectedMonth){
      this.selectedYear = fecha.getFullYear();
    }else{
      this.selectedYear = fecha.getFullYear() - 1;
    }
    console.log(this.selectedYear);
  }

  getEntradas(){
    this.dataService.getPagos(this.idgrupo,this.mes.value.month,this.selectedYear).subscribe(pagos =>{
      this.pagos = pagos;
      console.log(pagos);
      this.pagosTotal = 0;
      for (let index = 0; index < this.pagos.length; index++) {
        this.pagosTotal = this.pagosTotal + parseFloat(this.pagos[index].monto);
        }
      this.dataService.getGastos(this.idgrupo,this.selectedMonth,this.selectedYear).subscribe( gastos=>{
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
    this.dataService.addGasto(this.Gasto).subscribe((res)=>{
      console.log('res:', res);
      console.log('this.mes.value.month',this.mes.value.month);
      console.log('this.Gasto.month', this.Gasto.month);
      if(res && parseInt(this.mes.value.month) == this.Gasto.month){
        this.gastos.push(res);
        this.balance = this.balance - parseInt(res.monto);
        if(this.balance < 0){
          this.positivo = false;
        }else{
          this.positivo = true;
        }
      }
    });
    this.closeModal(id);
  }

  format(str: string){
    if(str.length == 1){
      this.gasto.get('monto').setValue('0.0'+str);
    }
    if(str.slice(1,2) == '.' && str.slice(0,1) == '0' && str.length > 4){
      var str1: string;
      str1 = str.slice(2);
      str1 = str1.slice(0,1) + '.' + str1.slice(1);
      this.gasto.get('monto').setValue(str1);
    }
    if(str.length > 4 && str.slice(0,1) != '0'){
      var str3: string;
      str3 =  str.slice(0,str.length-4) + str.slice(str.length-3);
      str3 = str3.slice(0,str3.length-2)+ '.' + str3.slice(str3.length-2);
      this.gasto.get('monto').setValue(str3);
    }
    if(str.slice(str.length-2,str.length-1) == '.'){
      var str4: string;
      str4 = str.slice(0,str.length-2) + str.slice(str.length-1);
      str4 = str4.slice(0,str4.length-2)+ '.' + str4.slice(str4.length-2);
      this.gasto.get('monto').setValue(str4);
    }
    if(str.length == 3){
      var str2: string;
      str2 = '0.' + str.slice(0,1) + str.slice(2);
      this.gasto.get('monto').setValue(str2);
    }
  }
  
  cierreMes(){
    var usuarios = [];
    this.dataService.getUserAlicuota(this.idgrupo).subscribe(users=>{
      console.log(users);
      usuarios = users;
      this.recibos = new Array(usuarios.length);
      for (let index = 0; index < usuarios.length; index++) {
        this.recibos[index] = new Recibos;
        this.recibos[index].idgrupo = this.idgrupo;
      }
      for (let index = 0; index < usuarios.length; index++) {
        this.recibos[index].uid = usuarios[index].usuarioUid;
        this.recibos[index].monto = (this.gastosTotal * (parseFloat(usuarios[index].alicuota)/100)).toFixed(2);
        this.recibos[index].month = this.selectedMonth;
        this.recibos[index].year = this.selectedYear;
      }
      console.log(this.recibos);
      for (let index = 0; index < this.recibos.length; index++) {
        this.dataService.addRecibos(this.recibos[index]).subscribe((res)=>{
          if(res && (index == this.recibos.length - 1)){
            this.router.navigate(['/'+this.uid+'/finanzas/'+this.idgrupo]);
          }
        });
      }
    });
  }
}
