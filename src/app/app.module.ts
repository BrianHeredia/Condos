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
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';

import { ModalComponent } from './components/modal/modal.component';

import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service.service';
import { ModalService } from './services/modal.service';
import { PersonasComponent } from './components/personas/personas.component';
import { EstadoCuentaComponent } from './components/estado-cuenta/estado-cuenta.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ListaDeudoresComponent } from './components/lista-deudores/lista-deudores.component';
import { ReciboComponent } from './components/recibo/recibo.component';
import { ListaReciboComponent } from './components/lista-recibo/lista-recibo.component';

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
    ModalComponent,
    PersonasComponent,
    EstadoCuentaComponent,
    WelcomeComponent,
    ListaDeudoresComponent,
    ReciboComponent,
    ListaReciboComponent
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
    DataService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
