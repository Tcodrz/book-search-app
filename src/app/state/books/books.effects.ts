import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from '@ngrx/store';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { ApiService } from '../../core/services/api.service';
import { AppState } from '../state';
import { BookSearchService } from './../../book-search/services/book-search.service';
import { loadMore, moreLoaded, onQuery, response, search } from './books.actions';

@Injectable()
export class BooksEffects {
  private readonly params = '&langRestrict=english&maxResults=20';
  booksSearch$ = createEffect(() => this.actions$.pipe(
    ofType(search),
    mergeMap((action) => {
      this.store.dispatch(onQuery({ payload: action.payload }));
      return this.api.searchBooks(
        this.booksSearchService.buildQuery(action.payload) +
        this.params
      ).pipe(
        map((res) => (response({ payload: {books: res.items, totalItems: res.totalItems }})),
          catchError(() => EMPTY)
        ))
    }
    )
  ));

  loadMore$ = createEffect(() => this.actions$.pipe(
    ofType(loadMore),
    mergeMap((action) =>
    this.api.searchBooks(
      this.booksSearchService.buildQuery(action.payload.lastQuery) +
      this.params +
      `&startIndex=${action.payload.index}`
    ).pipe(
      map(res => res.items),
      map((books) => (moreLoaded({ payload: books }))),
      catchError(() => EMPTY)
    ))
  ));

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private api: ApiService,
    private booksSearchService: BookSearchService
  ) { }
}


