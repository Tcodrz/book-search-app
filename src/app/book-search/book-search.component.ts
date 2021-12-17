import { User } from './../state/interface/user.interface';
import { Book } from './../state/interface/book.interface';
import { map, Observable, of, Subscription } from 'rxjs';
import { QueryObject } from './services/book-search.service';
import { search, loadMore, addToWishList } from './../state/books/books.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../state/state';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit, OnDestroy {
  books: Book[] = [];
  user$!: Observable<User>;
  lastQuery!: QueryObject;
  booksSubscription: Subscription = new Subscription();
  totalItems = 0;
  showModal = false;
  book!: Book;
  loadMoreEnabled = true;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.booksSubscription = this.store.select('books').subscribe(state => {
      this.books = state.books;
      this.lastQuery = state.query;
      this.totalItems = state.totalItems;
      this.loadMoreEnabled = this.books ? this.books.length < this.totalItems : false;
    })
    this.user$ = this.store.select('user').pipe(map(state => state.user));
  }
  ngOnDestroy(): void { this.booksSubscription.unsubscribe(); }
  onSearch(query: QueryObject): void {
    this.store.dispatch(search({
      payload: query
    }));
  }
  onLoadMore(index: number): void {
    if (index < (this.totalItems -1)) {
      this.store.dispatch(loadMore({
        payload: {
          index,
          lastQuery: this.lastQuery
        }
      }));
    }
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
