import { QueryObject } from './../../book-search/services/book-search.service';
import { createReducer, Action, on } from '@ngrx/store';
import { Book } from "../interface/book.interface";
import * as BooksActions from './books.actions';

export interface BooksState {
  books: Book[];
  totalItems: number;
  wishList: Book[];
  query: QueryObject;
}
const initialBooksState: BooksState = {
  books: [],
  totalItems: 0,
  wishList: [],
  query: {
    intitle: '',
    inauthor: '',
    inpublisher: '',
    subject: ''
  }
}
const _booksReducer = createReducer(
  initialBooksState,
  on(BooksActions.response, (state, action) => {
    return {
      ...state,
      books: action.payload.books,
      totalItems: action.payload.totalItems
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
  }),
  on(BooksActions.removeFromWishList, (state, action) => {
    return {
      ...state,
      wishList: state.wishList.filter(book => book !== action.payload)
    };
  }),
  on(BooksActions.onQuery, (state, action) => {
    return {
      ...state,
      query: action.payload
    }
  })
);
export function booksReducer(state = initialBooksState, action: Action): BooksState {
  return _booksReducer(state, action);
}
