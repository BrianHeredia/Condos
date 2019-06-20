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
  
  private idgrupo;
  private uid;
  private mes: FormGroup;
  private personas = [];
  constructor(
    private route: ActivatedRoute,
    public modalService: ModalService,
    private dataService: DataService,
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    this.mes = this.fb.group({
      month:['',[]]
    });
    this.uid = this.route.snapshot.params['uid'];
    this.idgrupo = this.route.snapshot.params['idgrupo'];
  }

  getEntradas(){
    this.dataService.getDeudores(this.idgrupo, this.mes.value.month).subscribe( array =>{
      this.personas = array;
      console.log(array);
    });
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
