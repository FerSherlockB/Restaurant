import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ErrorHandlerService } from './error-handler.service';
import { Injectable } from '@angular/core';
import { Factura } from 'src/app/core/models/comprobantes/factura';
import { catchError } from 'rxjs/operators';
import { AppEndpoints } from 'src/app/app-endpoints';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private endpoint = AppEndpoints.INVOICES;

  constructor(private httpCliente: HttpClient, private errorHandler: ErrorHandlerService) { }

  getInvoice(ordenId: number): Observable<Factura> {
    return this.httpCliente.get<Factura>(`${this.endpoint}/orden/${ordenId}`);
  }

  createInvoice(ordenId: number, cajeroUid: string): Observable<Factura> {
    return this.httpCliente.post<Factura>(`${this.endpoint}/generar?ordenId=${ordenId}&cajeroUid=${cajeroUid}`, null)
      .pipe(catchError(error => this.errorHandler.handleError(error)));
  }

  cancelInvoice(invoiceId: number): Observable<any> {
    return this.httpCliente.delete(`${this.endpoint}/anular/${invoiceId}`).pipe(catchError(error => this.errorHandler.handleError(error)));
  }


}
