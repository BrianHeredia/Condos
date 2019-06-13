import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { ModalService } from '../../services/modal.service';


@Component({
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.css']
})
export class EstadoCuentaComponent implements OnInit {
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

  /*Se confirma el nuevo gasto y se cierra el modal*/
  confirmGasto(id: string){
    /*codigo BD*/
    this.closeModal(id);
  }
}
