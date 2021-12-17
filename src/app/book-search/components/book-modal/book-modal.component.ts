import { Book } from './../../../state/interface/book.interface';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookModalComponent {
  @Input() showModal = false;
  @Input() bookInWishList: boolean | null = false;
  @Input() showAddToWishList = true;
  @Input() set value (val: Book) { this.book = val; }
  @Output() addToWishList: EventEmitter<void> = new EventEmitter();
  @Output() hide: EventEmitter<void> = new EventEmitter();
  book!: Book;
  addBookToWishList(): void { this.addToWishList.emit(); }
}
