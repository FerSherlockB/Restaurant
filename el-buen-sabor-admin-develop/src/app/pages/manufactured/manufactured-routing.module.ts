import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManufacturedTableComponent } from './manufactured-table/manufactured-table.component';


const routes: Routes = [
  { path: '', component: ManufacturedTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturedRoutingModule { }
