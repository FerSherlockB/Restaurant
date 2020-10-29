import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashierTableComponent } from './cashier-table/cashier-table.component';


const routes: Routes = [
  { path: '', component: CashierTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashierRoutingModule { }
