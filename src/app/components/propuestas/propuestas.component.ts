import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Propuesta } from '../../models/propuestas';
import { ModalService } from '../../services/modal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Like } from '../../models/likes';
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
  private liked: Like;
  private admin: boolean = false;
  private isLiked: boolean = false;
  private likes: number;
  private dislikes: number;
  constructor(
    private route: ActivatedRoute,
    public modalService: ModalService,
    private fb: FormBuilder,
    private dataService: DataService
) { }

  ngOnInit() {
    this.uid = this.route.snapshot.params['uid'];
    this.idgrupo = this.route.snapshot.params['idgrupo'];
    this.dataService.getUserGrupo(this.idgrupo).subscribe( user =>{
      this.admin = user.admin;
    });
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


  openModal(id: string) {
    this.modalService.open(id);
  }

  selectPro(pro: Propuesta) {
    this.pro = new Propuesta;
    this.pro = pro;
    this.dataService.countLikes(this.pro.id, 0).subscribe(likes=>{
      this.likes = likes[0].cantidad;
    });
    this.dataService.countLikes(this.pro.id, 1).subscribe(likes=>{
      this.dislikes = likes[0].cantidad;
    });
    this.dataService.findLike(this.pro.id, this.uid).subscribe(like=>{
      if(like.length == 0){
        this.isLiked = false;
      }else{
        this.isLiked = true;
      }
    })
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  addPropuesta(id: string){
    this.Propuesta = this.propuesta.value;
    this.Propuesta.idgrupo = this.idgrupo;
    this.Propuesta.uid = this.uid;
    this.dataService.addPropuestas(this.Propuesta).subscribe();
    this.closeModal(id);
  }

  getPropuestas(){
    this.dataService.getPropuestas(this.idgrupo).subscribe(propuestas=>{
      this.propuestas = propuestas;
    })
  }

  like(like: boolean, id: number, modal: string){
    this.liked = new Like;
    this.liked.id = id;
    this.liked.isLike = like;
    this.liked.uid = this.uid;
    this.dataService.addLike(this.liked).subscribe();
    this.closeModal(modal);
  }

}
