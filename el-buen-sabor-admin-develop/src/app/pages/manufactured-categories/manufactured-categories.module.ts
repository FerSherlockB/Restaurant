import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturedCategoriesRoutingModule } from './manufactured-categories-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTableModule } from 'src/app/shared/data-table/data-table.module';
import { ManufacturedCategoriesDetailComponent } from './manufactured-categories-detail/manufactured-categories-detail.component';
import { ManufacturedCategoriesFormComponent } from './manufactured-categories-form/manufactured-categories-form.component';
import { ManufacturedCategoriesTableComponent } from './manufactured-categories-table/manufactured-categories-table.component';


@NgModule({
  declarations: [
    ManufacturedCategoriesDetailComponent,
    ManufacturedCategoriesFormComponent,
    ManufacturedCategoriesTableComponent
  ],
  imports: [
    CommonModule,
    ManufacturedCategoriesRoutingModule,
    SharedModule,
    DataTableModule
  ]
})
export class ManufacturedCategoriesModule { }
