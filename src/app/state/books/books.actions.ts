import { Book } from '../interface/book.interface';
import { createAction } from '@ngrx/store';
import { QueryObject } from './../../book-search/services/book-search.service';
import { props } from '@ngrx/store';

export const search = createAction('[BOOKS] Search', props<{payload: QueryObject}>());
export const response = createAction('[BOOKS] Response', props<{ payload: { books: Book[], totalItems: number }}>());
export const loadMore = createAction('[BOOKS] Load More', props<{ payload: {lastQuery: QueryObject, index: number }}>());
export const moreLoaded = createAction('[BOOKS] More Loaded', props<{ payload: Book[] }>());
export const addToWishList = createAction('[BOOKS] Add To Wish-List', props<{ payload: Book}>());
export const onQuery = createAction('[BOOKS] Query', props<{ payload: QueryObject}>());
