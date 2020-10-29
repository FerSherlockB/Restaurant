import { Component, OnInit, Input } from '@angular/core';
import { DetalleOrden } from 'src/app/core/models/comprobantes/detalle-orden';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input()
  public data: Array<DetalleOrden>;
  detailColumns: string[] = ['imagen', 'denominacion', 'cantidad'];

  constructor() { }

  ngOnInit(): void {
  }

}
