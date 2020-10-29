import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditPhoneComponent } from './edit-phone/edit-phone.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) { }

  editPhone() {
    this.matDialog.open(EditPhoneComponent, {
      panelClass: 'app-dialog',
      width: '420px'
    });
  }

  forgotPassword() {
    this.matDialog.open(ForgotPasswordComponent, {
      panelClass: 'app-dialog',
      width: '500px'
    });
  }

}
