import { Book } from './../state/interface/book.interface';
import { map, Observable, of } from 'rxjs';
import { QueryObject } from './services/book-search.service';
import { search, loadMore } from './../state/books/books.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../state/state';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  books$: Observable<Book[]> = of([]);
  lastQuery!: QueryObject;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.books$ = this.store.select('books').pipe(map(state => state.books));
  }

  onSearch(query: QueryObject): void {
    console.log(query);
    this.lastQuery = query;
    this.store.dispatch(search({
      payload: query
    }));
  }

  onLoadMore(index: number): void {
    console.log(index);
    this.store.dispatch(loadMore({ payload: {
      lastQuery: this.lastQuery, index
    } }));
  }

}
