import { Empleado } from './../../core/models/usuarios/empleado';
import { ErrorHandlerService } from './error-handler.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppEndpoints } from 'src/app/app-endpoints';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private endpoint = AppEndpoints.EMPLOYEES;

  constructor(private httpClient: HttpClient, private errorHandler: ErrorHandlerService) { }

  create(empleado: Empleado): Observable<Empleado> {
    return this.httpClient.post<Empleado>(this.endpoint, empleado)
      .pipe(catchError(error => this.errorHandler.handleError(error)));
  }

  findByUid(uid: string): Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.endpoint}/current/${uid}`)
      .pipe(catchError(error => this.errorHandler.handleError(error)));
  }

  findByCuil(cuil: string): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.endpoint}/cuil/${cuil}`)
      .pipe(catchError(error => this.errorHandler.handleError(error)));
  }

  findAllRepartidores(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.endpoint}/all`, {
      params: new HttpParams()
        .set('filter', 'repartidor')
    }).pipe(catchError(error => this.errorHandler.handleError(error)));
  }
}
