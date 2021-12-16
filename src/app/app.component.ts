import * as UserActions from './state/user/user.actions';
import { User } from './state/interface/user.interface';
import { CachService } from './core/services/cach.service';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from './state/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private store: Store<AppState>,
    private cache: CachService
  ) {}
  ngOnInit(): void {
    const cachedUser =this.cache.getItem<User | null >('user')
    if (cachedUser) this.store.dispatch(UserActions.login({ payload: cachedUser }));
  }
 }
