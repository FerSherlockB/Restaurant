import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersTableComponent } from './customers-table/customers-table.component';


const routes: Routes = [
  { path: '', component: CustomersTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
