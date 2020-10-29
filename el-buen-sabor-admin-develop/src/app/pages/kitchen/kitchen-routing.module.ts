import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KitchenTableComponent } from './kitchen-table/kitchen-table.component';


const routes: Routes = [
  { path: '', component: KitchenTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitchenRoutingModule { }
