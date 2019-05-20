import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public email: string;
  public password: string;
  public first: string;
  public last: string;
  public confirm: string;
  public cedula: string;
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  onSubmitAddUser(){
    if(this.password == this.confirm){
        this.authService.registerUser(this.email,this.password)
      .then( (res) =>{
        this.authService.getAuth().subscribe( user =>{
          if(user){
            user.updateProfile({
              displayName: 'user',
              photoURL: null
            }).then( () =>{
            }).catch( (error) => console.log('error',error));
          }
        });
        this.flashMensaje.show('Congrats! You have succesfully sign up into Condos System',
        {cssClass: '', timeout: 6000});
        this.router.navigate(['/']);
      }).catch( (err) =>{
        console.log(err);
      })
    }else{
      this.flashMensaje.show('Fields "Contraseña" and "Confirmar Contraseña" should match',
      {cssClass: '', timeout: 6000});
    }
  }

}


  


