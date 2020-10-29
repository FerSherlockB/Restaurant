import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { UpdatePasswordComponent } from './update-password/update-password.component';


@NgModule({
  declarations: [LoginComponent, UpdatePasswordComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SharedModule
  ]
})
export class IndexModule { }
