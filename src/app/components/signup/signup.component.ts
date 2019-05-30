import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service.service';

import { Usuario } from '../../models/usuarios';

import { FlashMessagesService } from 'angular2-flash-messages';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  uid: String;
  user: FormGroup;
  usuario = new Usuario();
  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public flashMensaje: FlashMessagesService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.user = this.fb.group({
      uid: '',
      first: ['', [
        Validators.required
      ]],
      last: ['', [
        Validators.required
      ]],
      cedula: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.min(10000)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]]
    })
  }


  AddUser() {
    this.user.value.uid = this.authService.registerUser(this.user.controls['email'], this.user.value.password);
    this.toDataBase();
  }

  toDataBase() {
    console.log(this.user.value)
    this.dataService.addUsuario(this.user.value).subscribe();
  }

  retroToUser() {
    this.flashMensaje.show('Congrats! You have succesfully sign up into Condos System',
      { cssClass: '', timeout: 6000 });
    this.router.navigate(['/']);
  }



  get email() {
    return this.user.get('email');
  }

  get password() {
    return this.user.get('password');
  }

  get first() {
    return this.user.get('first');
  }

  get last() {
    return this.user.get('last');
  }

  get cedula() {
    return this.user.get('cedula');
  }

}





