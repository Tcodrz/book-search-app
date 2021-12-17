import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { AppState } from '../state/state';
import * as BooksActions from './../state/books/books.actions';
import { Book } from './../state/interface/book.interface';
import { User } from './../state/interface/user.interface';
import { BookSearchService, QueryObject } from './services/book-search.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
  constructor(
    private store: Store<AppState>,
    private booksSearchService: BookSearchService
  ) { }

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
    const strQuery = this.booksSearchService.buildQuery(query);
    const isValid = this.booksSearchService.isValidQuery(strQuery);
    if (isValid) {
      this.store.dispatch(BooksActions.onQuery({ payload: query }));
      this.store.dispatch(BooksActions.search({ payload: strQuery }));
    }
    else this.store.dispatch(BooksActions.clear());
  }
  onLoadMore(index: number): void {
    if (index < (this.totalItems -1)) {
      this.store.dispatch(BooksActions.loadMore({
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
    this.store.dispatch(BooksActions.addToWishList({ payload: this.book }));
    this.hideModal();
  }
  hideModal(): void { this.showModal = false; }
  bookInWishList(): Observable<boolean> {
    return this.store.select('books').pipe(map(state => state.wishList.includes(this.book)));
  }

}
