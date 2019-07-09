import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ActivatedRoute, Params} from '@angular/router';
import { DataService } from '../../services/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-deudores',
  templateUrl: './lista-deudores.component.html',
  styleUrls: ['./lista-deudores.component.css']
})
export class ListaDeudoresComponent implements OnInit {
  
  public idgrupo;
  public uid;
  public mes: FormGroup;
  public selectedMonth;
  public selectedYear;
  public personas = [];
  constructor(
    public route: ActivatedRoute,
    public modalService: ModalService,
    public dataService: DataService,
    public fb : FormBuilder
  ) { }

  ngOnInit() {
    this.mes = this.fb.group({
      month:['',[]]
    });
    this.uid = this.route.snapshot.params['uid'];
    this.idgrupo = this.route.snapshot.params['idgrupo'];
  }

  getEntradas(){
    this.dataService.getDeudores(this.idgrupo, this.selectedMonth, this.selectedYear).subscribe( array =>{
      this.personas = array;
      console.log(array);
    });
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

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  confirmEdit(id: string){
    this.closeModal(id);
  }
}
