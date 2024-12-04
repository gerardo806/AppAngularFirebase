import { Routes } from '@angular/router';
import {AuthComponent} from './layout/auth/auth.component';
import {loginRoutes} from './modules/login/login.routes';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: loginRoutes
  }
];
