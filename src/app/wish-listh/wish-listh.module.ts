import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishListhRoutingModule } from './wish-listh-routing.module';
import { WishListhComponent } from './wish-listh.component';


@NgModule({
  declarations: [
    WishListhComponent
  ],
  imports: [
    CommonModule,
    WishListhRoutingModule
  ]
})
export class WishListhModule { }
