import { Action, ActionReducerMap, createReducer } from '@ngrx/store';
import { booksReducer, BooksState } from './books/books.reducer';
import { userReducer, UserState } from './user/user.reducer';

export interface AppState {
  books: BooksState;
  user: UserState;
  app: {loading: boolean};
}

const initialState = {
  loading: false
};

const _appReducer = createReducer(initialState);

function appReducer(state = initialState, action: Action): { loading: boolean} {
  return _appReducer(state, action);
}

export const reducers: ActionReducerMap<AppState > = {
  books: booksReducer,
  user: userReducer,
  app: appReducer
}
