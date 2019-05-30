import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { JoinComponent } from './components/join/join.component';
import { CreateComponent } from './components/create/create.component';
import { InactiveComponent } from './components/inactive/inactive.component';

const routes: Routes = [
  { path: '', component: DashboardComponent  },
  { path: 'login', component: LoginComponent  },
  { path: 'signup', component: SignupComponent},
  { path: 'join', component: JoinComponent},
  { path: 'create', component: CreateComponent},
  { path: 'inactive', component: InactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
