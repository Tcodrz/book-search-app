import { clear } from './../../state/books/books.actions';
import { CacheService } from './../services/cach.service';
import { logout } from './../../state/user/user.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppState } from 'src/app/state/state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private cache: CacheService
  ) { }
  ngOnInit(): void {
    const url = this.router.url;
    this.items = [
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: (this.onLogout)
      },
      {
        label: 'search',
        icon: 'pi pi-search',
        disabled: url === '/search',
        command: (() => {
          this.router.navigate(['/search'])
        })
      },
      {
        label: 'wishlist',
        icon: 'pi pi-heart',
        command: (() => {
          this.router.navigate(['wishlist']);
        }),
        disabled: url === '/wishlist'
      }
    ]
  }

  onLogout = () => {
    this.store.dispatch(logout());
    this.store.dispatch(clear())
    this.cache.clear();
    this.router.navigate(['login']);
  }

}
