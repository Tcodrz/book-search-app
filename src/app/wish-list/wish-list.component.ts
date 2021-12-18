import { CacheService } from './../core/services/cach.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import * as BooksActions from '../state/books/books.actions';
import { AppState } from '../state/state';
import { Book } from './../state/interface/book.interface';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishListComponent implements OnInit {
  books: Book[] = [];
  selectedBook!: Book;
  showModal = false;

  constructor(
    private store: Store<AppState>,
    private cache: CacheService
  ) { }
  ngOnInit(): void {
    const wishlist = this.cache.getItem<Book[]>('wishlist');
    if (wishlist) {
        this.store.dispatch(BooksActions.setWishList({ payload: wishlist }));
    }
    this.store.select('books').pipe(map(state => state.wishList)).subscribe(wishlist => {
        this.books = wishlist
    });
  }
  removeFromWishList(book: Book): void {
    this.store.dispatch(BooksActions.removeFromWishList({ payload: book }));
  }
  openModal(book: Book): void {
    this.selectedBook = book;
    this.showModal = true;
  }
  closeModal(): void {this.showModal = false; }
}
