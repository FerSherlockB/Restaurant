import { Component } from '@angular/core';
import { Categoria } from 'src/app/core/models/articulos/categoria';
import { ManufacturedCategoriesDetailComponent } from '../manufactured-categories-detail/manufactured-categories-detail.component';
import { ManufacturedCategoriesFormComponent } from '../manufactured-categories-form/manufactured-categories-form.component';
import { AppEndpoints } from 'src/app/app-endpoints';

@Component({
  selector: 'app-manufactured-categories-table',
  templateUrl: './manufactured-categories-table.component.html',
  styleUrls: ['./manufactured-categories-table.component.scss']
})
export class ManufacturedCategoriesTableComponent {

  public detailDialog = ManufacturedCategoriesDetailComponent;
  public formDialog = ManufacturedCategoriesFormComponent;
  public path = AppEndpoints.CATEGORIES;
  public title = 'Categorías';
  public icon = 'list_alt';
  public tableColumns = [
    { columnDef: 'imagen', header: 'Imagen', cell: (categoria: Categoria) => `${categoria.imagen}` },
    { columnDef: 'denominacion', header: 'Denominación', cell: (categoria: Categoria) => `${categoria.denominacion}` },
    { columnDef: 'oculto', header: 'Público', cell: (categoria: Categoria) => `${categoria.oculto}` }
  ];

  constructor() { }

}
