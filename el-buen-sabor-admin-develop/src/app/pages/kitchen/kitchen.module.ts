import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchenRoutingModule } from './kitchen-routing.module';
import { DataTableModule } from 'src/app/shared/data-table/data-table.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { KitchenDetailComponent } from './kitchen-detail/kitchen-detail.component';
import { KitchenTableComponent } from './kitchen-table/kitchen-table.component';


@NgModule({
  declarations: [
    KitchenDetailComponent,
    KitchenTableComponent
  ],
  imports: [
    CommonModule,
    KitchenRoutingModule,
    SharedModule,
    DataTableModule
  ]
})
export class KitchenModule { }
