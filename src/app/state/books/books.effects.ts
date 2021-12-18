import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MessageService } from 'primeng/api';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { ApiService } from '../../core/services/api.service';
import { BookSearchService } from './../../book-search/services/book-search.service';
import { addedToWishList, addToWishList, loadMore, moreLoaded, removedFromWishList, removeFromWishList, response, search } from './books.actions';

@Injectable()
export class BooksEffects {
  booksSearch$ = createEffect(() => this.actions$.pipe(
    ofType(search),
    mergeMap((action) => {
      return this.api.searchBooks(action.payload)
      .pipe(
        map(res => response({ payload: { books: res.items, totalItems: res.totalItems } }) )
      )
    })
  ));
  loadMore$ = createEffect(() => this.actions$.pipe(
    ofType(loadMore),
    mergeMap((action) =>
      this.api.searchBooks(this.booksSearchService.buildQuery(action.payload.lastQuery, action.payload.index))
        .pipe(
          map(res => res.items),
          map((books) => (moreLoaded({ payload: books }))),
          catchError(() => EMPTY)
        ))
  ));
  addToWishList$ = createEffect(() => this.actions$.pipe(
    ofType(addToWishList),
    map((action) => {
      this.booksSearchService.addBookToWishtList(action.payload);
      this.msgService.add({ severity: 'info', icon: 'pi pi-heart-fill', summary: `${action.payload.volumeInfo.title} Added To Your Wish List!`, key: 'wishlist-add'});
      return addedToWishList({ payload: action.payload });
    })
    ));
    removeFromWishList$ = createEffect(() => this.actions$.pipe(
      ofType(removeFromWishList),
      map((action) => {
        this.booksSearchService.removeBookFromWishList(action.payload);
        this.msgService.add({ severity: 'warn', summary: `${action.payload.volumeInfo.title} Removed From Your Wish List!`, key: 'wishlist-remove'});
      return removedFromWishList({ payload: action.payload });
    })
  ))

  constructor(
    private actions$: Actions,
    private api: ApiService,
    private booksSearchService: BookSearchService,
    private msgService: MessageService
  ) { }
}


