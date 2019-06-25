import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Propuesta } from '../../models/propuestas';
import { ModalService } from '../../services/modal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Recibos } from '../../models/recibos';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-propuestas',
  templateUrl: './propuestas.component.html',
  styleUrls: ['./propuestas.component.css']
})
export class PropuestasComponent implements OnInit {

  private idgrupo;
  private uid;
  private propuesta: FormGroup;
  private Propuesta: Propuesta;
  private pro: Propuesta;
  private propuestas = [];
  constructor(
    private route: ActivatedRoute,
    public modalService: ModalService,
    private fb: FormBuilder,
    private dataService: DataService
) { }

  ngOnInit() {
    this.uid = this.route.snapshot.params['uid'];
    this.idgrupo = this.route.snapshot.params['idgrupo'];
    this.propuesta = this.fb.group({
      titulo: ['', [
        Validators.required
      ]],
      descripcion: ['', [
        Validators.required
      ]],
      presupuesto: ['', [
      ]]
    });
    this.getPropuestas();
  }


  openModal(id: string, pro: Propuesta) {
    this.pro = pro;
    this.modalService.open(id);
  }


  closeModal(id: string) {
    this.modalService.close(id);
  }

  addPropuesta(id: string){
    this.Propuesta = this.propuesta.value;
    this.Propuesta.idgrupo = this.idgrupo;
    this.Propuesta.uid = this.uid;
    console.log(this.Propuesta);
    this.dataService.addPropuestas(this.Propuesta).subscribe();
    this.closeModal(id);
  }

  getPropuestas(){
    this.dataService.getPropuestas(this.idgrupo).subscribe(propuestas=>{
      this.propuestas = propuestas;
      console.log(this.propuestas);
    })
  }

}
