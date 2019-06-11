import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuarios';
import { Grupo } from '../models/grupos';
import { UsuarioGrupo } from '../models/usuario-grupo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public user: Usuario;
  public userGroup: UsuarioGrupo;
  private usuariosUrl = 'http://localhost:3000/api/usuarios';  // URL to web api
  private gruposUrl = 'http://localhost:3000/api/grupo';  // URL to web api
  private usuarioGrupoUrl = 'http://localhost:3000/api/user_grupo';  // URL to web api
  private personasUrl = 'http://localhost:3000/api/personas';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }
  ;

  userInfo(usuario: Usuario){
    this.user = usuario;
  }

  userInit(){
    this.user = new Usuario;
    this.user.uid = localStorage.currentUserID;
  }
  
  //Métodos http para Usuarios
  /*
  getUsuarios (): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuariosUrl)
  }

  getUsuario(cedula: number): Observable<Usuario> {
    const url = `${this.usuariosUrl}/${cedula}`;
    return this.http.get<Usuario>(url);
  }
*/

  addUsuario (usuario: Usuario): Observable<Usuario> {
    const body = JSON.stringify(usuario);
    return this.http.post<Usuario>(this.usuariosUrl, body, httpOptions);
  }

  deleteUsuario (usuario: Usuario | number): Observable<Usuario> {
    const cedula = typeof usuario === 'number' ? usuario : usuario.cedula;
    const url = `${this.usuariosUrl}/${cedula}`;

    return this.http.delete<Usuario>(url, httpOptions);
  }

  updateUsuario (usuario: Usuario): Observable<any> {
    return this.http.put(this.usuariosUrl, usuario, httpOptions);
  }

  //Métodos http para Grupos

  addGrupo(grupo: Grupo): Observable<Grupo> {
    const body = JSON.stringify(grupo);
    return this.http.post<Grupo>(this.gruposUrl, body, httpOptions);
  }

  //Métodos http para usuarioGrupo

  addUserGrupos (usuarioGrupo: UsuarioGrupo): Observable<UsuarioGrupo> {
    const body = JSON.stringify(usuarioGrupo);
    return this.http.post<UsuarioGrupo>(this.usuarioGrupoUrl, body, httpOptions);
  }

  getUserGrupos(): Observable<UsuarioGrupo[]>{
    const url = `${this.usuarioGrupoUrl}/${localStorage.currentUserID}`;
    return this.http.get<UsuarioGrupo[]>(url);
  }

  joinGroup(usuarioGrupo: UsuarioGrupo):Observable<UsuarioGrupo>{
    const url = `${this.usuarioGrupoUrl}/${usuarioGrupo.codigo}`;
    const body = JSON.stringify(usuarioGrupo);
    return this.http.post<UsuarioGrupo>(url, body, httpOptions);
  }
  getUsuarios (): Observable<Usuario[]> {
    const url = `${this.personasUrl}/${'1'}`;
    return this.http.get<Usuario[]>(url);
  }
}
