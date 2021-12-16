import { User } from './../state/interface/user.interface';
import { Book } from './../state/interface/book.interface';
import { map, Observable, of } from 'rxjs';
import { QueryObject } from './services/book-search.service';
import { search, loadMore, addToWishList } from './../state/books/books.actions';
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
  user$!: Observable<User>;
  lastQuery!: QueryObject;
  showModal = false;
  book!: Book;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.books$ = this.store.select('books').pipe(map(state => state.books));
    this.user$ = this.store.select('user').pipe(map(state => state.user));
  }
  onSearch(query: QueryObject): void {
    this.lastQuery = query;
    this.store.dispatch(search({
      payload: query
    }));
  }
  onLoadMore(index: number): void {
    this.store.dispatch(loadMore({ payload: {
      lastQuery: this.lastQuery, index
    } }));
  }
  onShowBookDetails(book: Book): void {
    this.book = book;
    this.showModal = true;
  }
  addBookToWishList(): void {
    this.store.dispatch(addToWishList({ payload: this.book }));
    this.hideModal();
  }
  hideModal(): void { this.showModal = false; }
  bookInWishList(): Observable<boolean> {
    return this.store.select('books').pipe(map(state => state.wishList.includes(this.book)));
  }

}
