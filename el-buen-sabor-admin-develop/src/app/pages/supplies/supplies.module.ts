import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliesRoutingModule } from './supplies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTableModule } from 'src/app/shared/data-table/data-table.module';
import { SuppliesDetailComponent } from './supplies-detail/supplies-detail.component';
import { SuppliesFormComponent } from './supplies-form/supplies-form.component';
import { SuppliesTableComponent } from './supplies-table/supplies-table.component';
import { StockFormComponent } from './supplies-detail/stock-form/stock-form.component';


@NgModule({
  declarations: [
    SuppliesDetailComponent,
    SuppliesFormComponent,
    SuppliesTableComponent,
    StockFormComponent
  ],
  imports: [
    CommonModule,
    SuppliesRoutingModule,
    SharedModule,
    DataTableModule
  ]
})
export class SuppliesModule { }
