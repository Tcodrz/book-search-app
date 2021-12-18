import { PlatformModule } from '@angular/cdk/platform';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './../core/core.module';
import { PrimengModule } from './../primeng/primeng.module';
import { BookSearchRoutingModule } from './book-search-routing.module';
import { BookSearchComponent } from './book-search.component';
import { ResultsComponent } from './components/results/results.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    BookSearchComponent,
    SearchComponent,
    ResultsComponent,
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    PlatformModule,
    BookSearchRoutingModule,
    ReactiveFormsModule,
    PrimengModule,
    CoreModule
  ],
  providers: [ ]
})
export class BookSearchModule { }
