import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard} from './guards/auth.guard';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JoinComponent } from './components/join/join.component';
import { CreateComponent } from './components/create/create.component';
import { InactiveComponent } from './components/inactive/inactive.component';
import { CnotificationComponent } from './components/cnotification/cnotification.component';
import { CproposalComponent } from './components/cproposal/cproposal.component';
import { MenuGrupoComponent } from './components/menu-grupo/menu-grupo.component';
import { PersonasComponent } from './components/personas/personas.component';
import { FinanzasComponent } from './components/finanzas/finanzas.component';
import { EstadoCuentaComponent } from './components/estado-cuenta/estado-cuenta.component';
import { ListaDeudoresComponent } from './components/lista-deudores/lista-deudores.component';
import { ReciboComponent } from './components/recibo/recibo.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { PropuestasComponent } from './components/propuestas/propuestas.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ListaReciboComponent } from './components/lista-recibo/lista-recibo.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: ':uid', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: ':uid/join', component: JoinComponent, canActivate: [AuthGuard]},
  { path: ':uid/create', component: CreateComponent, canActivate: [AuthGuard]},
  { path: ':uid/inactive/:idgrupo', component: InactiveComponent, canActivate: [AuthGuard]},
  { path: ':uid/menu/:idgrupo', component: MenuGrupoComponent, canActivate: [AuthGuard]},
  { path: ':uid/personas/:idgrupo', component: PersonasComponent, canActivate: [AuthGuard]},
  { path: ':uid/finanzas/:idgrupo', component: FinanzasComponent, canActivate: [AuthGuard]},
  /*cambiar el path al verdadero, esto es solo para poder verlos y construirlos*/ 
  { path: ':uid/estadoCuenta', component: EstadoCuentaComponent, canActivate: [AuthGuard]},
  { path: ':uid/listaDeudores', component: ListaDeudoresComponent, canActivate: [AuthGuard]},
  { path: ':uid/recibo', component: ReciboComponent, canActivate: [AuthGuard]},
  { path: ':uid/listaRecibo', component: ListaReciboComponent, canActivate: [AuthGuard]},
  
  { path: ':uid/notificaciones/:idgrupo', component: NotificacionesComponent, canActivate: [AuthGuard]},
  { path: ':uid/propuestas/:idgrupo', component: PropuestasComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
