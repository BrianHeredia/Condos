import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service.service';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  public isLogin: boolean;
  public emailUser: string;
  
  private condos = [];
  constructor(
    public authService: AuthService,
    public router: Router,
    public modalService: ModalService,
    public dataService: DataService
) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth =>{
      if(auth){
        this.isLogin=true;
        this.emailUser = auth.email;
      }else{
        this.isLogin = false;
      }
    });
    /*this.getGrupos();*/
  }

  onClickLogout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }


  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  /*Cambiar a getPersonas()

  getGrupos(){
    this.dataService.getGrupos().subscribe(condos=>{
      this.condos = condos;
    });
  }*/
  
}


