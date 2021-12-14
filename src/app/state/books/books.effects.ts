import { BookSearchService } from './../../book-search/services/book-search.service';
import { search, response } from './books.actions';
import { ApiService } from '../../core/services/api.service';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class BooksEffects {
  booksSearch$ = createEffect(() => this.actions$.pipe(
    ofType(search),
    mergeMap((action) => this.api.searchBooks(this.booksSearchService.buildQuery(action.payload)).pipe(
      map((books) => (response({ payload: books})),
      catchError(() => EMPTY)
    )))
  ));

  constructor(
    private actions$: Actions,
    private api: ApiService,
    private booksSearchService: BookSearchService
  ) {}
}
