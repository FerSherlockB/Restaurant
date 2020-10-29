import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(protected snackBar: MatSnackBar) { }

  handleError(err) {
    const errorMessage = 'Ocurrió un error. intente nuevamente más tarde';
    this.snackBar.open(errorMessage, 'OK', { duration: 10000, panelClass: ['app-snackbar'] });
    return throwError(`${errorMessage} (${err.status})`);
  }
}
