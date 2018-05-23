import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserCocktailsComponent } from './user-cocktails/user-cocktails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing/app-routing.module';
import { AllCocktailsComponent } from './all-cocktails/all-cocktails.component';
import { SuperSecretComponent } from './super-secret/super-secret.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { AuthService } from './services/auth.service';

import { AngularFireModule } from 'angularfire2';
import { environment } from './../environments/environment.prod';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserCocktailsComponent,
    NavbarComponent,
    PageNotFoundComponent,
    AllCocktailsComponent,
    SuperSecretComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
