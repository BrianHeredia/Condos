import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  private message: string = '';
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService,
    public dataService: DataService
  ) { }

  ngOnInit() {

  }
  
  async onSubmitLogIn(){
    this.message = 'Has inicado sesión correctamente!';
    await this.authService.loginEmail(this.email, this.password)
    .then((res)=>{
      this.flashMensaje.show('Bienvenido a Condos',
      {cssClass: '', timeout: 3000});
      this.router.navigate(['/'+res]);
    }).catch((err) =>{
      this.flashMensaje.show(err.message,
      {cssClass: '', timeout: 6000});
      console.log(err);
    });
  }
}

