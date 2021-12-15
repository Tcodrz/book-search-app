import { ArrayToStringPipe } from './../core/pipes/array-to-string.pipe';
import { PrimengModule } from './../primeng/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSearchRoutingModule } from './book-search-routing.module';
import { BookSearchComponent } from './book-search.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookSearchComponent,
    SearchComponent,
    ResultsComponent,
    ArrayToStringPipe
  ],
  imports: [
    CommonModule,
    BookSearchRoutingModule,
    ReactiveFormsModule,
    PrimengModule,
  ],
  providers: [ ]
})
export class BookSearchModule { }
