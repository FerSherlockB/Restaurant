import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersTableComponent } from './customers-table/customers-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTableModule } from 'src/app/shared/data-table/data-table.module';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';


@NgModule({
  declarations: [
    CustomersDetailComponent,
    CustomersTableComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    DataTableModule
  ]
})
export class CustomersModule { }
