import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AllCocktailsComponent } from './../all-cocktails/all-cocktails.component';
import { UserCocktailsComponent } from '../user-cocktails/user-cocktails.component';
import { UserProfileComponent } from './../user-profile/user-profile.component';
import { UserLoginComponent } from '../user-login/user-login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

import { SuperSecretComponent } from './../super-secret/super-secret.component';

import { AdminGuard } from './../guard/admin.guard';
import { CanReadGuard } from './../guard/can-read.guard';
import { CanEditGuard } from './../guard/can-edit.guard';

export const appRoutes: Routes = [
  { path: 'browse-cocktails', component: AllCocktailsComponent, canActivate: [CanReadGuard] },
  { path: 'user-cocktails', component: UserCocktailsComponent, canActivate: [CanEditGuard] },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [CanEditGuard] },
  { path: 'super-secret', component: SuperSecretComponent, canActivate: [AdminGuard] },
  { path: 'user-login', component: UserLoginComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];