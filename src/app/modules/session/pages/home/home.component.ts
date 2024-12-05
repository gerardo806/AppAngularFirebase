import { Component } from '@angular/core';
import { Firestore, addDoc, collection } from 'firebase/firestore';
import {FirebaseService} from '../../../../../config/db/firebase.service';
import {ReqFirebaseService} from '../../../../../services/collection/req-firebase.service';
import {Phone} from '../../../../../models/products/Imp/smartphoneImp';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
