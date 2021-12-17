import { PrimengModule } from './../primeng/primeng.module';
import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishListRoutingModule } from './wish-list-routing.module';
import { WishListComponent } from './wish-list.component';


@NgModule({
  declarations: [
    WishListComponent
  ],
  imports: [
    CommonModule,
    WishListRoutingModule,
    PrimengModule,
    CoreModule,
  ]
})
export class WishListModule { }
