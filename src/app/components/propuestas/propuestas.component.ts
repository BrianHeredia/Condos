import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  public idgrupo;
  public uid;
  public propuesta: FormGroup;
  public Propuesta: Propuesta;
  public pro: Propuesta;
  public propuestas = [];
  public liked: Like;
  public admin: boolean = false;
  public isLiked: boolean = false;
  public likes: number;
  public dislikes: number;
  constructor(
    public route: ActivatedRoute,
    public modalService: ModalService,
    public fb: FormBuilder,
    public dataService: DataService
  ) { }

  async ngOnInit() {
    this.uid = this.route.snapshot.params['uid'];
    this.idgrupo = this.route.snapshot.params['idgrupo'];
    this.dataService.getUserGrupo(this.idgrupo).subscribe(user => {
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
        Validators.required,
        Validators.pattern("[-+]?[0-9]*[.]?[0-9]+")
      ]]
    });
    await this.getPropuestas();
    console.log(this.propuestas);
  }

  format(str: string) {
    if (str.length == 1) {
      this.propuesta.get('presupuesto').setValue('0.0' + str);
    }
    if (str.slice(1, 2) == '.' && str.slice(0, 1) == '0' && str.length > 4) {
      var str1: string;
      str1 = str.slice(2);
      str1 = str1.slice(0, 1) + '.' + str1.slice(1);
      this.propuesta.get('presupuesto').setValue(str1);
    }
    if (str.length > 4 && str.slice(0, 1) != '0') {
      var str3: string;
      str3 = str.slice(0, str.length - 4) + str.slice(str.length - 3);
      str3 = str3.slice(0, str3.length - 2) + '.' + str3.slice(str3.length - 2);
      this.propuesta.get('presupuesto').setValue(str3);
    }
    if (str.slice(str.length - 2, str.length - 1) == '.') {
      var str4: string;
      str4 = str.slice(0, str.length - 2) + str.slice(str.length - 1);
      str4 = str4.slice(0, str4.length - 2) + '.' + str4.slice(str4.length - 2);
      this.propuesta.get('presupuesto').setValue(str4);
    }
    if (str.length == 3) {
      var str2: string;
      str2 = '0.' + str.slice(0, 1) + str.slice(2);
      this.propuesta.get('presupuesto').setValue(str2);
    }
  }


  openModal(id: string) {
    this.modalService.open(id);
  }

  selectPro(pro: Propuesta) {
    this.pro = new Propuesta;
    this.pro = pro;
    this.dataService.countLikes(this.pro.id, 0).subscribe(likes => {
      this.likes = likes[0].cantidad;
    });
    this.dataService.countLikes(this.pro.id, 1).subscribe(likes => {
      this.dislikes = likes[0].cantidad;
    });
    this.dataService.findLike(this.pro.id, this.uid).subscribe(like => {
      if (like.length == 0) {
        this.isLiked = false;
      } else {
        this.isLiked = true;
      }
    })
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  addPropuesta(id: string) {
    this.Propuesta = this.propuesta.value;
    this.Propuesta.idgrupo = this.idgrupo;
    this.Propuesta.uid = this.uid;
    this.dataService.addPropuestas(this.Propuesta).subscribe( res => {
      if( res ){
        this.propuestas.push(res); 
      }
    });
    this.closeModal(id);
  }

  getPropuestas() {
    this.dataService.getPropuestas(this.idgrupo).subscribe(propuestas => {
      this.propuestas = propuestas;
    })
  }

  like(like: boolean, id: number, modal: string) {
    this.liked = new Like;
    this.liked.id = id;
    this.liked.isLike = like;
    this.liked.uid = this.uid;
    this.dataService.addLike(this.liked).subscribe();
    this.closeModal(modal);
  }

}
