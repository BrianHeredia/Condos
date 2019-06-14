import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-lista-deudores',
  templateUrl: './lista-deudores.component.html',
  styleUrls: ['./lista-deudores.component.css']
})
export class ListaDeudoresComponent implements OnInit {

  constructor(
    public modalService: ModalService
  ) { }

  ngOnInit() {
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  /*Se confirma el nueva deuda y se cierra el modal*/
  confirmEdit(id: string){
    /*codigo BD*/
    this.closeModal(id);
  }
}
