import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { map } from "rxjs/operators";
import { DataService } from '../services/data.service';
import { Usuario } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public uid: string;
  constructor(
    public afAuth: AngularFireAuth,
    public dataService: DataService
  ) { }
    
    
  async registerUser( email: string, pass: string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, pass).then( (userData) => {
      return this.createUser(userData.user.uid);
    });
  }

  async loginEmail(email: string, pass: string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, pass).then( (userData) => {
      return this.currentUser(userData.user.uid);
    });
  }

  createUser(uid: string){
    this.dataService.user.uid = uid;
    this.dataService.addUsuario(this.dataService.user).subscribe();
  }

  currentUser(uid: string){
    this.dataService.user = new Usuario;
    this.dataService.user.uid = uid;
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
    localStorage.clear();
    return this.afAuth.auth.signOut();
  }
  
}