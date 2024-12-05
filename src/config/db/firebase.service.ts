import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAnalytics, Analytics } from "firebase/analytics";
import { Injectable } from '@angular/core';
import {FirebaseConfig} from '../../models/db/FirebaseConfig';
import {environment} from '../../environments/env';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private readonly firebaseConfig: FirebaseConfig;

  constructor() {
    this.firebaseConfig = environment.firebaseConfig;
  }

  public initializeApp(): FirebaseApp {
    return initializeApp(this.firebaseConfig);
  }

  public analytics(): Analytics {
    const app: FirebaseApp = this.initializeApp();
    return getAnalytics(app);
  }

  public firestore(): Firestore {
    const app: FirebaseApp = this.initializeApp();
    return getFirestore(app);
  }
}
