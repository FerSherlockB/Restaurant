import { Empleado } from './../../core/models/usuarios/empleado';
import { Estado } from './../../core/models/comprobantes/estado';
import { Observable } from 'rxjs';
import { Orden } from 'src/app/core/models/comprobantes/orden';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ErrorHandlerService } from './error-handler.service';
import { catchError } from 'rxjs/operators';
import { AppEndpoints } from 'src/app/app-endpoints';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private endpoint = AppEndpoints.ORDERS;

  constructor(private httpClient: HttpClient, private errorHandler: ErrorHandlerService) { }

  createOrder(orden: Orden, clienteUid: string): Observable<Orden> {
    return this.httpClient.post<Orden>(`${this.endpoint}/save`, orden, {
      params: new HttpParams()
        .set('clienteUid', clienteUid)
    }).pipe(catchError(error => this.errorHandler.handleError(error)));
  }

  updateEstado(estado: Estado, ordenId: number): Observable<Orden> {
    return this.httpClient.put<Orden>(`${this.endpoint}/estado/${ordenId}`, estado)
      .pipe(catchError(error => this.errorHandler.handleError(error)));
  }

  updateDelivery(repartidor: Empleado, ordenId: number): Observable<Orden> {
    return this.httpClient.put<Orden>(`${this.endpoint}/repartidor/${ordenId}`, repartidor)
      .pipe(catchError(error => this.errorHandler.handleError(error)));
  }

  getOrdenesEnCocina(filter = '', page = 0, size = 8, sortBy = 'ultimaActualizacion', direction = 'desc'): Observable<object> {
    return this.httpClient.get(`${this.endpoint}/cocina`, {
      params: new HttpParams()
        .set('filter', filter)
        .set('page', page.toString())
        .set('size', size.toString())
        .set('sortBy', sortBy)
        .set('direction', direction)
    }).pipe(catchError(error => this.errorHandler.handleError(error)));
  }

}
