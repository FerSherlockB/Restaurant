import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufacturedRoutingModule } from './manufactured-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTableModule } from 'src/app/shared/data-table/data-table.module';
import { ManufacturedDetailComponent } from './manufactured-detail/manufactured-detail.component';
import { ManufacturedFormComponent } from './manufactured-form/manufactured-form.component';
import { ManufacturedTableComponent } from './manufactured-table/manufactured-table.component';
import { DetailFormComponent } from './manufactured-form/detail-form/detail-form.component';


@NgModule({
  declarations: [
    ManufacturedDetailComponent,
    ManufacturedFormComponent,
    ManufacturedTableComponent,
    DetailFormComponent
  ],
  imports: [
    CommonModule,
    ManufacturedRoutingModule,
    SharedModule,
    DataTableModule
  ]
})
export class ManufacturedModule { }
