import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManufacturedCategoriesTableComponent } from './manufactured-categories-table/manufactured-categories-table.component';


const routes: Routes = [
  { path: '', component: ManufacturedCategoriesTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturedCategoriesRoutingModule { }
