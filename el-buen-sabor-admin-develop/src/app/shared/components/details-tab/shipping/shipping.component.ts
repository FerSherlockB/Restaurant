import { OrderService } from './../../../services/order.service';
import { EmployeeService } from './../../../services/employee.service';
import { Empleado } from 'src/app/core/models/usuarios/empleado';
import { Component, OnInit, Input } from '@angular/core';
import { Orden } from 'src/app/core/models/comprobantes/orden';
import { MatDialogRef } from '@angular/material/dialog';
import { CashierDetailComponent } from 'src/app/pages/cashier/cashier-detail/cashier-detail.component';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  @Input()
  public data: Orden;
  public carriers: Empleado[];
  public selectedCarrier: Empleado;
  public zoom = 18;

  get address() {
    return `${this.data.direccionEntrega.calle} ${this.data.direccionEntrega.numero}, ${this.data.direccionEntrega.localidad.nombre}, ${this.data.direccionEntrega.localidad.provincia.nombre}`;
  }

  get repartidor() {
    return `${this.data.repartidor.nombre} ${this.data.repartidor.apellido}`;
  }

  constructor(
    private dialogRef: MatDialogRef<CashierDetailComponent>,
    private employeeService: EmployeeService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getRepartidores();
  }

  getRepartidores() {
    this.employeeService.findAllRepartidores().subscribe(
      res => {
        this.carriers = res;
      }
    );
  }

  changeCarrier(newCarrier: Empleado) {
    this.selectedCarrier = newCarrier;
  }

  updateCarrier() {
    this.orderService.updateDelivery(this.selectedCarrier, this.data.id).subscribe(
      res => {
        this.data = res;
        this.dialogRef.close({ event: 'Reload' });
      }
    );
  }

}
