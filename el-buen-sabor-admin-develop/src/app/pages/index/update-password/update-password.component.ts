import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/authentication/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  public editPasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.editPasswordForm = this.formBuilder.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onConfirm() {
    const code = this.activeRoute.snapshot.queryParams['oobCode'];
    if (this.editPasswordForm.value.newPassword !== this.editPasswordForm.value.confirmPassword) {
      this.snackBar.open('¡Las contraseñas deben coincidir!', 'OK', {
        duration: 10000, panelClass: ['app-snackbar']
      });
    } else {
      this.authService.confirmNewPassword(code, this.editPasswordForm.value.newPassword)
        .then(
          () => {
            this.snackBar.open('Contraseña actualizada con éxito', 'OK', {
              duration: 10000, panelClass: ['app-snackbar']
            });
            this.router.navigate(['']);
          },
          err => {
            this.snackBar.open('Ha ocurrido un error', 'OK', {
              duration: 10000, panelClass: ['app-snackbar']
            });
          });
    }
  }

}
