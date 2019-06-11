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

  private usuarios = [];
  constructor(
    public authService: AuthService,
    public router: Router,
    public modalService: ModalService,
    public dataService: DataService
) { }

  ngOnInit() {
    console.log(localStorage.grupos);
    this.dataService.getUsuarios().subscribe(usuarios=>{
      console.log(usuarios);
      this.usuarios = usuarios;
    });
  }

  
}


