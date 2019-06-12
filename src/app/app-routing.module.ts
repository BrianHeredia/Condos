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
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { PropuestasComponent } from './components/propuestas/propuestas.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'join', component: JoinComponent, canActivate: [AuthGuard]},
  { path: 'create', component: CreateComponent, canActivate: [AuthGuard]},
  { path: 'inactive', component: InactiveComponent, canActivate: [AuthGuard]},
  { path: 'cproposal', component: CproposalComponent, canActivate: [AuthGuard]},
  { path: 'cnotification', component: CnotificationComponent, canActivate: [AuthGuard]},
  { path: 'menu/:idgrupo', component: MenuGrupoComponent, canActivate: [AuthGuard]},
  { path: 'personas/:idgrupo', component: PersonasComponent, canActivate: [AuthGuard]},
  { path: 'finanzas', component: FinanzasComponent, canActivate: [AuthGuard]},
  { path: 'notificaciones', component: NotificacionesComponent, canActivate: [AuthGuard]},
  { path: 'propuestas', component: PropuestasComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
