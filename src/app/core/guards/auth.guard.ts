import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from './../../state/state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }
  canActivate(): Observable<boolean | UrlTree> {
    return this.store.select('user').pipe(
      map(state => {
        if (state.isLoggedIn) {
          return true;
        } else {
          return this.router.parseUrl('/login');
        }
      }
      ));
  }
}
