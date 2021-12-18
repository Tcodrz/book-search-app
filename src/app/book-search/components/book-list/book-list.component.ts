import { Book } from '../../../state/interface/book.interface';
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent {
  @Input() books: Book[] = [];
  @Input() withButton = false;
  @Input() buttonValue = '';
  @Output() bookSelected: EventEmitter<Book> = new EventEmitter();
  @Output() bookBtnClick: EventEmitter<Book> = new EventEmitter();
}
