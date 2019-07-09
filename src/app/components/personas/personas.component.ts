import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service.service';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Params} from '@angular/router';
import { UserChanged } from '../../models/userChanged';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  public usuarios = [];
  public admins = [];
  public residentes = [];
  public idgrupo;
  public userChanged: UserChanged;
  public uid;
  public isadmin: boolean;
  constructor(
    public authService: AuthService,
    public route: ActivatedRoute,
    public router: Router,
    public modalService: ModalService,
    public dataService: DataService
) { }

  ngOnInit() {
    this.userChanged = new UserChanged;
    this.uid = this.route.snapshot.params['uid'];
    this.idgrupo = this.route.snapshot.params['idgrupo'];
    this.getPersonas(this.idgrupo);
  }

  getPersonas(idgrupo: number): void{
    this.dataService.getUsuarios(idgrupo).subscribe( usuarios =>{
      this.usuarios = usuarios;
      this.separatePeople();
      this.isadmin = this.isAdmin();
    });
  }

  isAdmin(): boolean{
    for (let index = 0; index < this.usuarios.length; index++) {
      if( this.usuarios[index].uid == this.uid){
        if(this.usuarios[index].usuario_grupos.admin){
          index = this.usuarios.length;
          return true;
        }
        else{
          index = this.usuarios.length;
          return false;
        }
        
      }
      
    }
  }

  separatePeople(){
    
    let contAdmins = 0; 
    let contRes = 0;
    for (let index = 0; index < this.usuarios.length; index++) {
      if( this.usuarios[index].usuario_grupos.admin ){
        contAdmins++;
      } 
    }
    contRes = this.usuarios.length - contAdmins;
    this.admins = new Array(contAdmins);
    this.residentes = new Array(contRes);
    let start = 0;
    for (let i = 0; i < this.admins.length; i++) {
      for (let j = start; j < this.usuarios.length; j++) {
        if( this.usuarios[j].usuario_grupos.admin ){
          this.admins[i] = this.usuarios[j];
          start = j + 1;
          j = this.usuarios.length;
        }  
      }
    }
    let empezar = 0;
    for (let k = 0; k < this.residentes.length; k++) {
      for (let l = empezar; l < this.usuarios.length; l++) {
        if( !this.usuarios[l].usuario_grupos.admin ){
          this.residentes[k] = this.usuarios[l];
          empezar = l + 1;
          l = this.usuarios.length;
        }  
      }
    }
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  thisUser(uid: string, admin: boolean, idgrupo: number){

    this.userChanged.uid = uid;
    this.userChanged.admin = (!admin);
    this.userChanged.idgrupo = idgrupo;
  }

  move(id: string){
    this.dataService.updateUserGrupos(this.userChanged).subscribe((res)=>{
      if(res){
        this.router.navigate(['/'+this.uid+'/menu/'+this.idgrupo]);
      }
    });
    this.closeModal(id);
  }

  delete(id: string){
    this.dataService.deleteUserGrupos(this.userChanged).subscribe((res)=>{
      if(res){
        this.router.navigate(['/'+this.uid+'/menu/'+this.idgrupo]);
      }
    });
    this.closeModal(id);
  }
  
}


