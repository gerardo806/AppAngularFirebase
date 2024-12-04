import { Component } from '@angular/core';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, Auth, UserCredential } from 'firebase/auth';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {NgIf} from '@angular/common';
import {AlertsSweetService} from '../../../../../services/alerts/alerts-sweet.service';
import {FirebaseService} from '../../../../../config/db/firebase.service';

@Component({
  selector: 'app-form-login',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {
  public _formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertService: AlertsSweetService,
    private db: FirebaseService
  ) {
    this._formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      password: ['', [Validators.required]]
    });
  }

  viewPassword(id: string): void {
    const check = document.getElementById(id) as HTMLElement;
    if(check){
      if(check.getAttribute('type') === 'password') {
        check.setAttribute('type', 'text');
      }else {
        check.setAttribute('type', 'password');
      }
    }
    else{}
  }

  public get _formGroupControls() {
    const controls = this._formGroup.controls;
    return controls;
  }

  public login(): void {
    if(this._formGroup.valid) {
      const email = this._formGroup.get('email')?.value;
      const password = this._formGroup.get('password')?.value;
      try {
        const app = this.db.initializeApp();
        const auht = getAuth(app);
        signInWithEmailAndPassword(auht, email, password)
          .then((userCredential: UserCredential) => {
            this.alertService.success('Inicio de sesión exitoso');
          })
          .catch((error: any) => {
            this.alertService.error('Error al iniciar sesión');
          });
      }catch (error) {
        this.alertService.error('Error al iniciar sesión');
      }
    } else {
      this.alertService.error('Complete los campos requeridos');
    }
  }
}
