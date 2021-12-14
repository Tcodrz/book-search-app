import { Book } from '../interface/book.interface';
import { createAction } from '@ngrx/store';
import { QueryObject } from './../../book-search/services/book-search.service';
import { props } from '@ngrx/store';

export const search = createAction('[BOOKS] Search', props<{payload: QueryObject}>());
export const response = createAction('[BOOKS] Response', props<{ payload: Book[]}>());
