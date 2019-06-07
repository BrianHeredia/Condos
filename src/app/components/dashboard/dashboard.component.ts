import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service.service';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
    /*
    this.authService.getAuth().subscribe( auth =>{
      if(auth){
        this.isLogin=true;
        this.emailUser = auth.email;
      }else{
        this.isLogin = false;
      }
    });*/
    this.getUserGrupos();
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

  getUserGrupos(){
    this.dataService.getUserGrupos().subscribe(condos=>{
      console.log(condos, 'holaaa');
      this.condos = condos;
    });
  }
  
}
