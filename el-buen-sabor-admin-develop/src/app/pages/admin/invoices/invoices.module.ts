import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTableModule } from 'src/app/shared/data-table/data-table.module';
import { InvoicesDetailComponent } from './invoices-detail/invoices-detail.component';
import { InvoicesTableComponent } from './invoices-table/invoices-table.component';


@NgModule({
  declarations: [
    InvoicesDetailComponent,
    InvoicesTableComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    SharedModule,
    DataTableModule
  ]
})
export class InvoicesModule { }
