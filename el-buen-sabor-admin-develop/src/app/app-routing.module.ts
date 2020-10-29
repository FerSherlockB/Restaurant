import { IsAdminGuard } from './shared/guards/is-admin.guard';
import { IsCajeroGuard } from './shared/guards/is-cajero.guard';
import { IsCocineroGuard } from './shared/guards/is-cocinero.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'index', pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module')
      .then(m => m.AdminModule),
    canActivate: [IsAdminGuard]
  },
  {
    path: 'cashier',
    loadChildren: () => import('./pages/cashier/cashier.module')
      .then(m => m.CashierModule),
    canActivate: [IsCajeroGuard]
  },
  {
    path: 'kitchen',
    loadChildren: () => import('./pages/kitchen/kitchen.module')
      .then(m => m.KitchenModule),
    canActivate: [IsCocineroGuard]
  },
  {
    path: 'manufactured',
    loadChildren: () => import('./pages/manufactured/manufactured.module')
      .then(m => m.ManufacturedModule),
      canActivate: [IsCocineroGuard]
  },
  {
    path: 'manufactured-categories',
    loadChildren: () => import('./pages/manufactured-categories/manufactured-categories.module')
      .then(m => m.ManufacturedCategoriesModule),
      canActivate: [IsAdminGuard]
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./pages/my-profile/my-profile.module')
      .then(m => m.MyProfileModule)
  },
  {
    path: 'supplies',
    loadChildren: () => import('./pages/supplies/supplies.module')
      .then(m => m.SuppliesModule),
      canActivate: [IsAdminGuard]
  },
  {
    path: 'supplies-categories',
    loadChildren: () => import('./pages/supplies-categories/supplies-categories.module')
      .then(m => m.SuppliesCategoriesModule),
      canActivate: [IsAdminGuard]
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module')
      .then(m => m.NotFoundModule), data: { visible: false }
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module')
      .then(m => m.IndexModule), data: { visible: false }
  },
  {
    path: '**',
    redirectTo: 'not-found', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
