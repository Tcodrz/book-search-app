import { ActionReducerMap } from '@ngrx/store';
import { booksReducer, BooksState } from './books/books.reducer';
import { userReducer, UserState } from './user/user.reducer';

export interface AppState {
  books: BooksState;
  user: UserState;
}
export const reducers: ActionReducerMap<AppState> = {
  books: booksReducer,
  user: userReducer
}
