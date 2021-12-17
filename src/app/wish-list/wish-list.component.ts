import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import * as BooksActions from '../state/books/books.actions';
import { AppState } from '../state/state';
import { Book } from './../state/interface/book.interface';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private store: Store<AppState>
  ) { }
  ngOnInit(): void {
    this.store.select('books').pipe(map(state => state.wishList)).subscribe(wishlist => {
      console.log(wishlist);
        this.books = wishlist
      });
  }
  removeFromWishList(book: Book): void {
    this.store.dispatch(BooksActions.removeFromWishList({ payload: book }));
  }
}
