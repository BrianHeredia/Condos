import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { DataService } from '../../services/data.service';
import { Grupo } from '../../models/grupos';

@Component({
  selector: 'app-menu-grupo',
  templateUrl: './menu-grupo.component.html',
  styleUrls: ['./menu-grupo.component.css']
})
export class MenuGrupoComponent implements OnInit {

  grupo: Grupo;
  public uid;
  constructor( public route: ActivatedRoute, public dataService: DataService) { }

  ngOnInit() {
    this.uid = this.route.snapshot.params['uid'];
    const idgrupo = this.route.snapshot.params['idgrupo'];
    this.getGroupInfo(idgrupo);
  }

  getGroupInfo(idgrupo: number): void{
    this.dataService.getGrupoByID(idgrupo).subscribe( grupo => {
    this.grupo = grupo;
    });
  }

}
