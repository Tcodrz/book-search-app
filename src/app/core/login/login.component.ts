import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/state';
import { CacheService } from '../services/cach.service';
import { User } from './../../state/interface/user.interface';
import { login } from './../../state/user/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private cache: CacheService
  ) { }
  get username() { return this.form.get('username'); }
  ngOnInit(): void {
    this.form = this.fb.group({
      username: this.fb.control('', [Validators.required])
    });
  }
  onSubmit(): void {
    this.store.dispatch(login({ payload: this.form.value }));
    this.router.navigate(['search']);
    this.cache.setItem<User>('user', this.form.value);
  }

}
