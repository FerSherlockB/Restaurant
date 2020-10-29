import { UpdatePasswordComponent } from './update-password/update-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'auth/resetPassword', component: UpdatePasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
