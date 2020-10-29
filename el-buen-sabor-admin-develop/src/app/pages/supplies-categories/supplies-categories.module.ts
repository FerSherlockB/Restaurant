import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliesCategoriesRoutingModule } from './supplies-categories-routing.module';

import { DataTableModule } from 'src/app/shared/data-table/data-table.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SuppliesCategoriesDetailComponent } from './supplies-categories-detail/supplies-categories-detail.component';
import { SuppliesCategoriesFormComponent } from './supplies-categories-form/supplies-categories-form.component';
import { SuppliesCategoriesTableComponent } from './supplies-categories-table/supplies-categories-table.component';


@NgModule({
  declarations: [
    SuppliesCategoriesDetailComponent,
    SuppliesCategoriesFormComponent,
    SuppliesCategoriesTableComponent
  ],
  imports: [
    CommonModule,
    SuppliesCategoriesRoutingModule,
    SharedModule,
    DataTableModule
  ]
})
export class SuppliesCategoriesModule { }
