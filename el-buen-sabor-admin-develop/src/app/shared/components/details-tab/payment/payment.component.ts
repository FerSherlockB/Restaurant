import { Component, OnInit, Input } from '@angular/core';
import { Orden } from 'src/app/core/models/comprobantes/orden';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @Input()
  public data: Orden;
  public dataSource: Array<Orden> = [];
  public paymentColumns: string[] = ['formaPago', 'montoDescuento', 'total', 'fecha'];

  constructor() { }

  ngOnInit(): void {
    this.dataSource.push(this.data);
  }

}
