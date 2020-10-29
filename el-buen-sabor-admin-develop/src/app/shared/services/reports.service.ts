import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ErrorHandlerService } from './error-handler.service';
import { ModeloGrafico } from 'src/app/core/models/reportes/modelo-grafico';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Orden } from 'src/app/core/models/comprobantes/orden';
import { AppEndpoints } from 'src/app/app-endpoints';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private endpoint = AppEndpoints.REPORTS;

  constructor(private httpClient: HttpClient, private errorHandler: ErrorHandlerService) {
  }

  getInsumosOutOfStock(): Observable<ModeloGrafico[]> {
    return this.httpClient.get<ModeloGrafico[]>(`${this.endpoint}/stock`).pipe(catchError(error => this.errorHandler.handleError(error)));
  }

  getIngresosPorPeriodo(fechaInicio: Date, fechaFin: Date): Observable<ModeloGrafico[]> {
    return this.httpClient.get<ModeloGrafico[]>(`${this.endpoint}/ingresos`, {
      params: new HttpParams()
        .set('fechaInicio', fechaInicio.toISOString().slice(0, 10))
        .set('fechaFin', fechaFin.toISOString().slice(0, 10))
    }).pipe(catchError(error => this.errorHandler.handleError(error)));
  }

  getOrdenesPorPeriodo(clienteUid: string, fechaInicio: Date, fechaFin: Date): Observable<Orden[]> {
    return this.httpClient.get<Orden[]>(`${this.endpoint}/ordenes`, {
      params: new HttpParams()
        .set('clienteUid', clienteUid)
        .set('fechaInicio', fechaInicio.toISOString().slice(0, 10))
        .set('fechaFin', fechaFin.toISOString().slice(0, 10))
    }).pipe(catchError(error => this.errorHandler.handleError(error)));
  }

  getTopInsumos(fechaInicio: Date, fechaFin: Date): Observable<ModeloGrafico[]> {
    return this.httpClient.get<ModeloGrafico[]>(`${this.endpoint}/topInsumos`, {
      params: new HttpParams()
        .set('fechaInicio', fechaInicio.toISOString().slice(0, 10))
        .set('fechaFin', fechaFin.toISOString().slice(0, 10))
    }).pipe(catchError(error => this.errorHandler.handleError(error)));
  }

  getTopManufacturados(fechaInicio: Date, fechaFin: Date): Observable<ModeloGrafico[]> {
    return this.httpClient.get<ModeloGrafico[]>(`${this.endpoint}/topManufacturados`, {
      params: new HttpParams()
        .set('fechaInicio', fechaInicio.toISOString().slice(0, 10))
        .set('fechaFin', fechaFin.toISOString().slice(0, 10))
    }).pipe(catchError(error => this.errorHandler.handleError(error)));
  }

  getOrdenesPorCliente(fechaInicio: Date, fechaFin: Date): Observable<ModeloGrafico[]> {
    return this.httpClient.get<ModeloGrafico[]>(`${this.endpoint}/cantidadOrdenes`, {
      params: new HttpParams()
        .set('fechaInicio', fechaInicio.toISOString().slice(0, 10))
        .set('fechaFin', fechaFin.toISOString().slice(0, 10))
    }).pipe(catchError(error => this.errorHandler.handleError(error)));
  }
}
