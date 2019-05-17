import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service.service';

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
    public router: Router
  ) { }

  ngOnInit() {
  }
  onSubmitLogIn(){
    this.authService.loginEmail(this.email, this.password)
    .then((res)=>{
      this.router.navigate(['/']);
    }).catch((err) =>{
      console.log('epaa',err);
      this.router.navigate(['/']);
    });
    
  }
}

