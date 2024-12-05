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

  constructor(
    private fb: FirebaseService,
    private queries: ReqFirebaseService
  ) {
    const phone = new Phone(2021, 'Nuevo', 'Alta', 'https://www.google.com', 'Samsung', 'Galaxy S21');
    this.queries.save(phone.getProduct(), 'celstores').then((res) => {
      console.log(res);
    }).catch((err) => {
      console.error(err);
    });
  }
}
