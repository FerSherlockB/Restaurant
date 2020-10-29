import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/core/models/comprobantes/factura';
import { InvoicesDetailComponent } from '../invoices-detail/invoices-detail.component';
import { AppEndpoints } from 'src/app/app-endpoints';

@Component({
  selector: 'app-invoices-table',
  templateUrl: './invoices-table.component.html',
  styleUrls: ['./invoices-table.component.scss']
})
export class InvoicesTableComponent implements OnInit {

  public detailDialog = InvoicesDetailComponent;
  public path = AppEndpoints.INVOICES;
  public title = 'Facturas';
  public icon = 'receipt';
  public tableColumns = [
    { columnDef: 'id', header: 'N° Factura', cell: (factura: Factura) => `${factura.id}` },
    { columnDef: 'fecha', header: 'Fecha', cell: (factura: Factura) => `${factura.fecha}` },
    { columnDef: 'total', header: 'Monto', cell: (factura: Factura) => `${factura.total}` },
    { columnDef: 'estado', header: 'Estado', cell: (factura: Factura) => `${factura.estado.denominacion}` },
    { columnDef: 'orden', header: 'N° Orden', cell: (factura: Factura) => `${factura.orden.id}` }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
