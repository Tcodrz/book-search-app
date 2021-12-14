import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSearchRoutingModule } from './book-search-routing.module';
import { BookSearchComponent } from './book-search.component';


@NgModule({
  declarations: [
    BookSearchComponent
  ],
  imports: [
    CommonModule,
    BookSearchRoutingModule
  ]
})
export class BookSearchModule { }
