import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ArticuloManufacturado } from 'src/app/core/models/articulos/articulo-manufacturado';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DetalleReceta } from 'src/app/core/models/articulos/detalle-receta';

@Component({
  selector: 'app-manufactured-detail',
  templateUrl: './manufactured-detail.component.html',
  styleUrls: ['./manufactured-detail.component.scss']
})
export class ManufacturedDetailComponent implements OnInit {

  public localData: ArticuloManufacturado;
  public costo = 0;
  public displayedColumns = ['insumo', 'cantidad', 'costoUnitario', 'costoTotal'];

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ArticuloManufacturado,
    public dialogRef: MatDialogRef<ManufacturedDetailComponent>
  ) {
    this.localData = { ...data };
  }

  ngOnInit(): void {
    this.costoArticulo();
  }

  costoTotal(item: DetalleReceta): number {
    return item.insumo.costo * item.cantidad;
  }

  costoArticulo() {
    this.localData.detallesReceta.forEach(element => {
      this.costo += this.costoTotal(element);
    });
  }

  getPublicClass() {
    return this.localData.oculto ? 'private' : 'public';
  }

}
