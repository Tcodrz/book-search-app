import { createReducer, Action, on } from '@ngrx/store';
import { Book } from "../interface/book.interface";
import * as BooksActions from './books.actions';

export interface BooksState {
  books: Book[];
  wishList: Book[];
}
const initialBooksState: BooksState = {
  books: [],
  wishList: []
}
const _booksReducer = createReducer(
  initialBooksState,
  on(BooksActions.response, (state, action) => {
    return {
      ...state,
      books: action.payload,
    };
  }),
  on(BooksActions.moreLoaded, (state, action) => {
    return {
      ...state,
      books: state.books.concat(action.payload)
    };
  }),
  on(BooksActions.addToWishList, (state, action) => {
    return {
      ...state,
      wishList: [ ...state.wishList, action.payload]
    };
  })
);
export function booksReducer(state = initialBooksState, action: Action): BooksState {
  return _booksReducer(state, action);
}
