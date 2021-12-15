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
import { Observable, tap } from 'rxjs';
import { AppState } from 'src/app/state/state';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(req => {
        this.store.dispatch(loading())
         if (req instanceof HttpResponse) this.store.dispatch(loaded())
         else if (req instanceof HttpErrorResponse) {
           this.store.dispatch(loaded());
           // HANDLE ERRORS
         }
      })
    );
  }
}
