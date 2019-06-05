import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public uid: string;
  constructor(
    public afAuth: AngularFireAuth
  ) { }
    
    
  async registerUser( email: string, pass: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email, pass).then( (userData) => {
      console.log(userData);
    });
  }

  loginEmail(email: string, pass: string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then( userData => resolve(userData),
      err => reject (err));
    });
  }

  updateEmail(email: string){
    this.afAuth.auth.currentUser.updateEmail(email).then(function() {
      console.log(" Update successful.");
    }).catch(function(error) {
      console.log("  An error happened.", error);
    }); 
  }

  getAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
    
  }

  logout(){
    return this.afAuth.auth.signOut();
  }
  
}