import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './shared/footer/footer.component';
import {FirebaseService} from '../config/db/firebase.service';
import {ReqFirebaseService} from '../services/collection/req-firebase.service';
import {Phone} from '../models/products/Imp/smartphoneImp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App Web Angular';
}
