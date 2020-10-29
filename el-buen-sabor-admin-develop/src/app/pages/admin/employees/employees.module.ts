import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTableModule } from 'src/app/shared/data-table/data-table.module';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { EmployeesFormComponent } from './employees-form/employees-form.component';
import { EmployeesTableComponent } from './employees-table/employees-table.component';


@NgModule({
  declarations: [
    EmployeesDetailComponent,
    EmployeesFormComponent,
    EmployeesTableComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,
    DataTableModule
  ]
})
export class EmployeesModule { }
