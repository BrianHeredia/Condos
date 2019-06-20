import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuarios';
import { Grupo } from '../models/grupos';
import { UsuarioGrupo } from '../models/usuario-grupo';
import { UserChanged } from '../models/userChanged';
import { Pago } from '../models/pago';
import { Gasto } from '../models/gasto';
import { PagoUser } from '../models/pagosusuarios';
import { Recibos } from '../models/recibos';

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
  private pagosUrl = 'http://localhost:3000/api/pagos';  // URL to web api
  private pagosUserUrl = 'http://localhost:3000/api/pagos/user';  // URL to web api
  private gastosUrl = 'http://localhost:3000/api/gastos';  // URL to web api
  private deudoresUrl = 'http://localhost:3000/api/deudores';  // URL to web api
  private recibosUrl = 'http://localhost:3000/api/recibos';  // URL to web api
  private userAlicuotasUrl = 'http://localhost:3000/api/user_grupo/users';  // URL to web api

  constructor( 
    private http: HttpClient
  ) { }

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
/*
  deleteUsuario (usuario: Usuario | number): Observable<Usuario> {
    const cedula = typeof usuario === 'number' ? usuario : usuario.cedula;
    const url = `${this.usuariosUrl}/${cgastoedula}`;

    return this.http.delete<Usuario>(url, httpOptions);
  }

  updateUsuario (usuario: Usuario): Observable<any> {
    return this.http.put(this.usuariosUrl, usuario, httpOptions);
  }
*/
  //Métodos http para Grupos

  getGrupoByID(idgrupo: number): Observable<Grupo> {
    const url = `${this.gruposUrl}/${idgrupo}`;
    return this.http.get<Grupo>(url);
  }

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

  getUserAlicuota(idgrupo: number): Observable<UsuarioGrupo[]>{
    const url = `${this.userAlicuotasUrl}/${idgrupo}`;
    return this.http.get<UsuarioGrupo[]>(url);
  }

  getUserGrupo(idgrupo: number): Observable<UsuarioGrupo>{
    const url = `${this.usuarioGrupoUrl}/${localStorage.currentUserID}/${idgrupo}`;
    return this.http.get<UsuarioGrupo>(url);
  }

  joinGroup(usuarioGrupo: UsuarioGrupo):Observable<UsuarioGrupo>{
    const url = `${this.usuarioGrupoUrl}/${usuarioGrupo.codigo}`;
    const body = JSON.stringify(usuarioGrupo);
    return this.http.post<UsuarioGrupo>(url, body, httpOptions);
  }

  getUsuarios (idgrupo: number): Observable<Usuario[]> {
    const url = `${this.personasUrl}/${idgrupo}`;
    return this.http.get<Usuario[]>(url);
  }

  updateUserGrupos (usuario: UserChanged ): Observable<any> {
    return this.http.put(this.usuarioGrupoUrl, usuario, httpOptions);
  }

  deleteUserGrupos (usuario: UserChanged): Observable<any> {
    const url = `${this.usuarioGrupoUrl}/${usuario.uid}/${usuario.idgrupo}`;
    return this.http.delete<UserChanged>(url, httpOptions);
  }
  
  //Metodos http para pagos

  addPago (pago: Pago): Observable<Pago> {
    const body = JSON.stringify(pago);
    return this.http.post<Pago>(this.pagosUrl, body, httpOptions);
  }

  getPagos(idgrupo: number, mes: number): Observable<Pago[]> {
    const url = `${this.pagosUrl}/${idgrupo}/${mes}`;
    return this.http.get<Pago[]>(url);
  }

  getPagosUser(idgrupo: number, uid: string):Observable<Pago[]>{
    const url = `${this.pagosUserUrl}/${idgrupo}/${uid}`;
    return this.http.get<Pago[]>(url);
  }

  //Metodos http para gastos

  addGasto (gasto: Gasto): Observable<Gasto> {
    const body = JSON.stringify(gasto);
    return this.http.post<Pago>(this.gastosUrl , body, httpOptions);
  }

  getGastos(idgrupo: number, mes: number): Observable<Gasto[]> {
    const url = `${this.gastosUrl}/${idgrupo}/${mes}`;
    return this.http.get<Gasto[]>(url);
  }

  getDeudores(idgrupo: number, mes: number): Observable<PagoUser[]> {
    const url = `${this.deudoresUrl}/${idgrupo}/${mes}`;
    return this.http.get<PagoUser[]>(url);
  }

  //Metodos http para gastos

  getRecibos(idgrupo: number, uid: string):Observable<Recibos[]>{
    const url = `${this.recibosUrl}/${idgrupo}/${uid}`;
    return this.http.get<Recibos[]>(url);
  }

  addRecibos(recibo: Recibos):Observable<Recibos>{
    const body = JSON.stringify(recibo);
    return this.http.post<Recibos>( this.recibosUrl, body, httpOptions);
  }

  updateRecibo (recibo: Recibos ): Observable<any> {
    const body = JSON.stringify(recibo);
    return this.http.put(this.recibosUrl, body, httpOptions);
  }
  
  
}
