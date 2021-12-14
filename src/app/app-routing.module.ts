import { LoginGuard } from './core/guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  { path: 'search', loadChildren: () => import('./book-search/book-search.module').then(m => m.BookSearchModule) },
  { path: 'wishlist', loadChildren: () => import('./wish-listh/wish-listh.module').then(m => m.WishListhModule) },
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
