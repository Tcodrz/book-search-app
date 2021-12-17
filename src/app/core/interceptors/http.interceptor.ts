import { loading, loaded } from './../../state/state';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap, map } from 'rxjs';
import { AppState } from 'src/app/state/state';
import * as BookActions from '../../state/books/books.actions';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map(req => {
        this.store.dispatch(loading())
        if (req instanceof HttpErrorResponse) {
          this.store.dispatch(BookActions.response({ payload: { books: [], totalItems: 0 } }));
          this.store.dispatch(loaded());
          return new HttpResponse({status: 200}); // temporary hack
          // HANDLE ERRORS
        }
          this.store.dispatch(loaded());
          return req;
      })
    );
  }
}
