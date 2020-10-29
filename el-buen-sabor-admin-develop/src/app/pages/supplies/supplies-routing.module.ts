import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliesTableComponent } from './supplies-table/supplies-table.component';


const routes: Routes = [
  { path: '', component: SuppliesTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliesRoutingModule { }
