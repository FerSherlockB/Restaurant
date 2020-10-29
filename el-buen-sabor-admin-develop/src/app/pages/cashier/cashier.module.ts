import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierRoutingModule } from './cashier-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DataTableModule } from 'src/app/shared/data-table/data-table.module';
import { CashierDetailComponent } from './cashier-detail/cashier-detail.component';
import { CashierTableComponent } from './cashier-table/cashier-table.component';


@NgModule({
  declarations: [
    CashierDetailComponent,
    CashierTableComponent
  ],
  imports: [
    CommonModule,
    CashierRoutingModule,
    SharedModule,
    DataTableModule
  ]
})
export class CashierModule { }
