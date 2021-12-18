import { BookListComponent } from './../book-search/components/book-list-item/book-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookModalComponent } from './../book-search/components/book-modal/book-modal.component';
import { PrimengModule } from './../primeng/primeng.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ArrayToStringPipe } from './pipes/array-to-string.pipe';



@NgModule({
  declarations: [
    NavbarComponent,
    ArrayToStringPipe,
    BookModalComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
  ],
  exports: [
    NavbarComponent,
    ArrayToStringPipe,
    BookModalComponent,
    BookListComponent
  ]
})
export class CoreModule { }
