import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService} from 'angular2-flash-messages';

import { HttpClientModule }    from '@angular/common/http';

import { AuthGuard } from './guards/auth.guard';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateComponent } from './components/create/create.component';
import { FinanzasComponent } from './components/finanzas/finanzas.component';
import { MenuGrupoComponent } from './components/menu-grupo/menu-grupo.component';
import { PropuestasComponent } from './components/propuestas/propuestas.component';
import { JoinComponent } from './components/join/join.component';
import { InactiveComponent } from './components/inactive/inactive.component';
import { CproposalComponent } from './components/cproposal/cproposal.component';
import { CnotificationComponent } from './components/cnotification/cnotification.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';

import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CreateComponent,
    DashboardComponent,
    FinanzasComponent,
    MenuGrupoComponent,
    PropuestasComponent,
    NotificacionesComponent,
    JoinComponent,
    InactiveComponent,
    CproposalComponent,
    CnotificationComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    FlashMessagesService,
    AuthGuard,
    AuthService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
