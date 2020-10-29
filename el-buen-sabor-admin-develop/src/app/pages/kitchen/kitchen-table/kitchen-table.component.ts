import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Orden } from 'src/app/core/models/comprobantes/orden';
import { KitchenDetailComponent } from '../kitchen-detail/kitchen-detail.component';
import { AppEndpoints } from 'src/app/app-endpoints';

@Component({
  selector: 'app-kitchen-table',
  templateUrl: './kitchen-table.component.html',
  styleUrls: ['./kitchen-table.component.scss']
})
export class KitchenTableComponent implements OnInit {

  public detailDialog = KitchenDetailComponent;
  public path = AppEndpoints.ORDERS_KITCHEN;
  public title = 'Cocina';
  public icon = 'restaurant';
  public tableColumns = [
    { columnDef: 'id', header: 'Orden', cell: (orden: Orden) => `${orden.id}` },
    { columnDef: 'cliente', header: 'Cliente', cell: (orden: Orden) => `${orden.cliente.nombre} ${orden.cliente.apellido}` },
    { columnDef: 'tiempoTotalPreparacion', header: 'Tiempo', cell: (orden: Orden) => `${orden.tiempoTotalPreparacion} min.` },
    { columnDef: 'horarioEntrega', header: 'Hora de Entrega', cell: (orden: Orden) => `${orden.horarioEntrega}` },
    { columnDef: 'estado', header: 'Estado', cell: (orden: Orden) => `${orden.estado.denominacion}` },
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(KitchenDetailComponent, {
      panelClass: 'app-dialog',
      disableClose: true,
      width: '70%'
    });
  }

}
