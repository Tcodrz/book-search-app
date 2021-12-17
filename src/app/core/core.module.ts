import { BookModalComponent } from './../book-search/components/book-modal/book-modal.component';
import { ArrayToStringPipe } from './pipes/array-to-string.pipe';
import { PrimengModule } from './../primeng/primeng.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NavbarComponent,
    ArrayToStringPipe,
    BookModalComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    NavbarComponent,
    ArrayToStringPipe,
    BookModalComponent
  ]
})
export class CoreModule { }
