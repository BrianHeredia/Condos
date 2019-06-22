import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { ModalService } from '../../services/modal.service';


@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
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

}
