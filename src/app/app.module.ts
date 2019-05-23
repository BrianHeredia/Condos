import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService} from 'angular2-flash-messages';
import { CreateComponent } from './components/create/create.component';
import { JoinComponent } from './components/join/join.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CreateComponent,
    DashboardComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot(),
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    FlashMessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
