import { BooksEffects } from './books/books.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reducers } from './state';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 20 }),
    EffectsModule.forRoot([BooksEffects])
  ],
  providers: [MessageService]
})
export class StateModule { }
