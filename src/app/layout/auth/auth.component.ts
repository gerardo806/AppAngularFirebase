import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarAuthComponent} from '../../shared/navbar-auth/navbar-auth.component';
import {FooterComponent} from '../../shared/footer/footer.component';

@Component({
  selector: 'app-auth',
  imports: [
    RouterOutlet,
    NavbarAuthComponent
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
