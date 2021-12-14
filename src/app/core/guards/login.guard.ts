import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from 'src/app/state/state';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }
  canActivate(): Observable<boolean | UrlTree> {
    return this.store.select('user')
      .pipe(
        map((user => {
          if (user.isLoggedIn) {
            return this.router.parseUrl('/search');
          } else {
            return true;
          }
        }))
      );
  }

}
