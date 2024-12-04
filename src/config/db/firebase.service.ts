import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAnalytics, Analytics } from "firebase/analytics";

import { Injectable } from '@angular/core';
import {FirebaseConfig} from '../../models/db/FirebaseConfig';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private readonly firebaseConfig: FirebaseConfig;

  constructor() {
    this.firebaseConfig = {
      apiKey: "AIzaSyAK5_S7IQJgaIQ8qnpXi75dptuGcwNNhQ8",
      authDomain: "appangularfirebase-67cf7.firebaseapp.com",
      projectId: "appangularfirebase-67cf7",
      storageBucket: "appangularfirebase-67cf7.firebasestorage.app",
      messagingSenderId: "202489308270",
      appId: "1:202489308270:web:6fea3f164eef38189f727f",
      measurementId: "G-PWK8R006CF"
    };
  }

  public initializeApp(): FirebaseApp {
    return initializeApp(this.firebaseConfig);
  }

  public analytics(): Analytics {
    const app: FirebaseApp = this.initializeApp();
    return getAnalytics(app);
  }
}
