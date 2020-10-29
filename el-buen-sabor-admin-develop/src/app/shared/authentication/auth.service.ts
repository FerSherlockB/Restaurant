import { EmployeeService } from './../services/employee.service';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { of, Observable } from 'rxjs';
import { Empleado } from 'src/app/core/models/usuarios/empleado';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDZHRmttCMVr-usvy0A8poGxRDgglHfMBU',
  authDomain: 'elbuensabor-admin.firebaseapp.com',
  databaseURL: 'https://elbuensabor-admin.firebaseio.com'
};
const secondaryApp = firebase.initializeApp(config, 'Secondary');

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: Observable<Empleado>;

  constructor(
    private authService: AngularFireAuth,
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar
  ) {
    this.user = this.authService.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.employeeService.findByUid(user.uid);
        }
        return of(null);
      })
    );
  }

  /* Registra un usario con email y contraseña */
  registerUser(userData: Empleado) {
    return new Promise((resolve, reject) => {
      secondaryApp.auth().createUserWithEmailAndPassword(userData.email, userData.cuil)
        .then(user => {
          userData.uid = user.user.uid;
          userData.email = user.user.email;
          resolve(userData);
        },
          err => reject(err));
    });
  }

  /* Login del usario con email y contraseña */
  loginEmailUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.authService.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  resetPassword(email: string) {
    this.authService.sendPasswordResetEmail(email)
      .then(
        () => {
          this.snackBar
            .open('¡Correo enviado! Revisa tu casilla y sigue los pasos', 'OK', { duration: 10000, panelClass: ['app-snackbar'] });
        },
        err => {
          this.snackBar
            .open('El email indicado no tiene usuario vinculado', 'OK', { duration: 10000, panelClass: ['app-snackbar'] });
        }
      );
  }

  confirmNewPassword(code: string, newPassword: string) {
    return this.authService.confirmPasswordReset(code, newPassword);
  }

  logoutUser() {
    return this.authService.signOut();
  }

  /* Averigua si hay un usuario conectado o no */
  isAuth() {
    return this.authService.authState.pipe(map(auth => auth));
  }

}
