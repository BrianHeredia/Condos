import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-finanzas',
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.css']
})
export class FinanzasComponent implements OnInit {
  private idgrupo;
  private uid;
  constructor(
    private route: ActivatedRoute,
    public modalService: ModalService
) { }

  ngOnInit() {
    this.uid = this.route.snapshot.params['uid'];
    this.idgrupo = this.route.snapshot.params['idgrupo'];
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  /*Se confirma el pago y se cierra el modal*/
  confirmPayment(id: string){
    /*codigo BD*/
    this.closeModal(id);
  }

}
