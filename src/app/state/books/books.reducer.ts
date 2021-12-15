import { createReducer, Action, on } from '@ngrx/store';
import { Book } from "../interface/book.interface";
import * as BooksActions from './books.actions';

export interface BooksState {
  books: Book[];
}
const initialBooksState: BooksState = {
  books: []
}
const _booksReducer = createReducer(
  initialBooksState,
  on(BooksActions.response, (state, action) => {
    return {
      books: action.payload
    };
  }),
  on(BooksActions.moreLoaded, (state, action) => {
    return {
      books: state.books.concat(action.payload)
    };
  })
);
export function booksReducer(state = initialBooksState, action: Action): BooksState {
  return _booksReducer(state, action);
}
