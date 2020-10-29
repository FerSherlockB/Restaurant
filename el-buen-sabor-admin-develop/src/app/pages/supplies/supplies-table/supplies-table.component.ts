import { Component } from '@angular/core';
import { SuppliesDetailComponent } from '../supplies-detail/supplies-detail.component';
import { SuppliesFormComponent } from '../supplies-form/supplies-form.component';
import { ArticuloInsumo } from 'src/app/core/models/articulos/articulo-insumo';
import { AppEndpoints } from 'src/app/app-endpoints';

@Component({
  selector: 'app-supplies-table',
  templateUrl: './supplies-table.component.html',
  styleUrls: ['./supplies-table.component.scss']
})
export class SuppliesTableComponent {

  public detailDialog = SuppliesDetailComponent;
  public formDialog = SuppliesFormComponent;
  public path = AppEndpoints.SUPPLIES;
  public router = '/supplies-categories';
  public routerText = 'Rubros';
  public title = 'Insumos';
  public icon = 'shopping_basket';
  public tableColumns = [
    { columnDef: 'imagen', header: 'Imagen', cell: (insumo: ArticuloInsumo) => `${insumo.imagen}` },
    { columnDef: 'denominacion', header: 'Denominación', cell: (insumo: ArticuloInsumo) => `${insumo.denominacion}` },
    { columnDef: 'rubro', header: 'Rubro', cell: (insumo: ArticuloInsumo) => `${insumo.rubro.denominacion}` },
    { columnDef: 'costo', header: 'Costo', cell: (insumo: ArticuloInsumo) => `${insumo.costo}` },
    { columnDef: 'precio', header: 'Precio', cell: (insumo: ArticuloInsumo) => `${insumo.precio}` },
    { columnDef: 'stockActual', header: 'Disponibilidad', cell: (insumo: ArticuloInsumo) => `${insumo.stockActual}` },
    { columnDef: 'oculto', header: 'Publico', cell: (insumo: ArticuloInsumo) => `${insumo.oculto}` }
  ];

  constructor() { }

}
