import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyProfileComponent } from './my-profile.component';


@NgModule({
  declarations: [
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    SharedModule
  ]
})
export class MyProfileModule { }
