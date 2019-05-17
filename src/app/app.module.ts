import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
<<<<<<< HEAD
import { SingupComponent } from './components/singup/singup.component';
import { SignupComponent } from './components/signup/signup.component';
=======
import { LoginComponent } from './components/login/login.component';
>>>>>>> 90cda2a0fc2e50b90543c81529c0004c6272e86d

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SingupComponent,
    SignupComponent
=======
    LoginComponent
>>>>>>> 90cda2a0fc2e50b90543c81529c0004c6272e86d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
