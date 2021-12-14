import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'search', loadChildren: () => import('./book-search/book-search.module').then(m => m.BookSearchModule) },
  { path: 'wishlist', loadChildren: () => import('./wish-listh/wish-listh.module').then(m => m.WishListhModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
