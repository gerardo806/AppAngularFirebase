import {RouterModule, Routes} from '@angular/router';
import {FormLoginComponent} from './pages/form-login/form-login.component';
import {NgModule} from '@angular/core';

export const loginRoutes: Routes = [
  { path: '', component: FormLoginComponent }
];

