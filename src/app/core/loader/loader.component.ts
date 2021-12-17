import { Store } from '@ngrx/store';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/state/state';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-loader',
  template: `
  <p-progressSpinner *ngIf="isLoading$ | async"></p-progressSpinner>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit {
  isLoading$: Observable<boolean> = of(false);
  constructor(
    private store: Store<AppState>
  ) { }
  ngOnInit(): void { this.isLoading$ = this.store.select('app').pipe(map((state) =>  state.loading)); }
}
