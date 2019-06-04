import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmitLogIn(){
    
    this.authService.loginEmail(this.email, this.password)
    .then((res)=>{
      this.flashMensaje.show('Welcome, you have succesfully sign in',
      {cssClass: '', timeout: 6000});
      this.router.navigate(['/']);
    }).catch((err) =>{
      this.flashMensaje.show(err.message,
      {cssClass: '', timeout: 6000});
      console.log(err);
    });
    
  }
}

