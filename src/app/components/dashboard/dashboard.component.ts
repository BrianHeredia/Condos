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
    });
  }

  onClickLogout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  selectedCondo(s: number){
    this.selected = s;
    console.log(this.selected);
  }

  deleteFromGroup(){
    this.userChanged = new UserChanged;
    this.userChanged.idgrupo = this.selected;
    this.userChanged.uid = this.uid;
    this.dataService.deleteUserGrupos(this.userChanged).subscribe();
  }


  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
  
}
