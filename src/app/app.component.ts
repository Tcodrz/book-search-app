import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { search } from './state/books/books.actions';
import { AppState } from './state/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<AppState>
  ) { }
  ngOnInit(): void {
    this.store.dispatch(search({
      payload: {
        intitle: 'inspector gadget',
        inauthor: '',
        inpublisher: '',
        subject: 'music'
      }
    }));
  }
}
