import { CoreModule } from './../core/core.module';
import { ArrayToStringPipe } from './../core/pipes/array-to-string.pipe';
import { PrimengModule } from './../primeng/primeng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookSearchRoutingModule } from './book-search-routing.module';
import { BookSearchComponent } from './book-search.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookModalComponent } from './components/book-modal/book-modal.component';


@NgModule({
  declarations: [
    BookSearchComponent,
    SearchComponent,
    ResultsComponent,
    BookModalComponent
  ],
  imports: [
    CommonModule,
    BookSearchRoutingModule,
    ReactiveFormsModule,
    PrimengModule,
    CoreModule
  ],
  providers: [ ]
})
export class BookSearchModule { }
