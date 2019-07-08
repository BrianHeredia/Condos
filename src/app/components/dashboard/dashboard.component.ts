import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service.service';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Params} from '@angular/router';
import { UserChanged } from '../../models/userChanged';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  

  private uid;
  private userChanged: UserChanged;
  private condos = [];
  private selected: number;
  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    public router: Router,
    public modalService: ModalService,
    public dataService: DataService
) { }

  ngOnInit() {
    this.uid = this.route.snapshot.params['uid'];
    this.dataService.getUserGrupos().subscribe(condos=>{
      this.condos = condos;
      console.log(this.condos);
    });
    if(localStorage.joinGroup != undefined){
      this.condos.push(localStorage.joinGroup); 
      localStorage.joinGroup = undefined;
    }
  }

  onClickLogout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  selectedCondo(s: number){
    this.selected = s;
  }

  deleteFromGroup(){
    this.userChanged = new UserChanged;
    this.userChanged.idgrupo = this.selected;
    this.userChanged.uid = this.uid;
    this.dataService.deleteUserGrupos(this.userChanged).subscribe(res=>{
      if(res){
        let i: number;
        for (let index = 0; index <this.condos.length; index++) {
          if(this.condos[index].idgrupo == this.selected ){
            i = index;
          }
        }
        this.condos[i] = undefined;
      }
    });
  }


  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
  
}
