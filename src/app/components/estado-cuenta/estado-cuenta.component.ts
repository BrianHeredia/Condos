import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';


@Component({
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.css']
})
export class EstadoCuentaComponent implements OnInit {

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

  /*Se confirma el nuevo gasto y se cierra el modal*/
  confirmGasto(id: string){
    /*codigo BD*/
    this.closeModal(id);
  }
}
