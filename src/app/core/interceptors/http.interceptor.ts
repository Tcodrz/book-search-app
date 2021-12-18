import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { AppState } from 'src/app/state/state';
import { loaded, loading } from './../../state/state';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(
    private store: Store<AppState>
  ) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.store.dispatch(loading());
    return next.handle(request).pipe(
      tap((req) => {
        if (req instanceof HttpResponse)
        this.store.dispatch(loaded())
      })
    );
  }
}
