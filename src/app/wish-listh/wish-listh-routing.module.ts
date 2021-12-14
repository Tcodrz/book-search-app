import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishListhComponent } from './wish-listh.component';

const routes: Routes = [{ path: '', component: WishListhComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishListhRoutingModule { }
