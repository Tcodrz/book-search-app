import { BookSearchService } from './../../book-search/services/book-search.service';
import { search, response, loadMore, moreLoaded } from './books.actions';
import { ApiService } from '../../core/services/api.service';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksEffects {
  private readonly params = '&langRestrict=english&maxResults=20';
  booksSearch$ = createEffect(() => this.actions$.pipe(
    ofType(search),
    mergeMap((action) => this.api.searchBooks(
      this.booksSearchService.buildQuery(action.payload) +
      this.params
    ).pipe(
      map((books) => (response({ payload: books })),
        catchError(() => EMPTY)
      )))
  ));

  loadMore$ = createEffect(() => this.actions$.pipe(
    ofType(loadMore),
    mergeMap((action) => this.api.searchBooks(
      this.booksSearchService.buildQuery(action.payload.lastQuery) +
      this.params +
      `&startIndex=${action.payload.index}`
    ).pipe(
        map((books) => (moreLoaded({ payload: books }))),
        catchError(() => EMPTY)
      ))
  ))

  constructor(
    private actions$: Actions,
    private api: ApiService,
    private booksSearchService: BookSearchService
  ) { }
}


