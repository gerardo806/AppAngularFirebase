import { Routes } from '@angular/router';
import {AuthComponent} from './layout/auth/auth.component';
import {loginRoutes} from './modules/login/login.routes';
import {sessionRoutes} from './modules/session/session.routes';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: loginRoutes
  },
  {
    path: 'core',
    component: AuthComponent,
    children: sessionRoutes
  }
];
