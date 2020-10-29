import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliesCategoriesTableComponent } from './supplies-categories-table/supplies-categories-table.component';


const routes: Routes = [
  { path: '', component: SuppliesCategoriesTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliesCategoriesRoutingModule { }
