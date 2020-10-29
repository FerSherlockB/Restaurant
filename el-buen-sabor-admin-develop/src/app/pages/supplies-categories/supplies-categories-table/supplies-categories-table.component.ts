import { Component } from '@angular/core';
import { SuppliesCategoriesDetailComponent } from '../supplies-categories-detail/supplies-categories-detail.component';
import { SuppliesCategoriesFormComponent } from '../supplies-categories-form/supplies-categories-form.component';
import { Rubro } from 'src/app/core/models/articulos/rubro';
import { AppEndpoints } from 'src/app/app-endpoints';

@Component({
  selector: 'app-supplies-categories-table',
  templateUrl: './supplies-categories-table.component.html',
  styleUrls: ['./supplies-categories-table.component.scss']
})
export class SuppliesCategoriesTableComponent {

  public detailDialog = SuppliesCategoriesDetailComponent;
  public formDialog = SuppliesCategoriesFormComponent;
  public path = AppEndpoints.RUBROS;
  public title = 'Rubros';
  public icon = 'list_alt';
  public tableColumns = [
    { columnDef: 'imagen', header: 'Imagen', cell: (rubro: Rubro) => `${rubro.imagen}` },
    { columnDef: 'id', header: 'Código', cell: (rubro: Rubro) => rubro.rubroPadre ? `${rubro.rubroPadre.id}.${rubro.id}` : `${rubro.id}` },
    { columnDef: 'denominacion', header: 'Denominación', cell: (rubro: Rubro) => `${rubro.denominacion}` },
    { columnDef: 'rubroPadre', header: 'Rubro Padre', cell: (rubro: Rubro) => rubro.rubroPadre ? `${rubro.rubroPadre.denominacion}` : 'No tiene' },
    { columnDef: 'oculto', header: 'Público', cell: (rubro: Rubro) => `${rubro.oculto}` }
  ];

  constructor() { }

}
