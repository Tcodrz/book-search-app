import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './../../../state/interface/book.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent {
  @Input() set value(val: Book[] | null) { this.books = val ? val : []; }
  @Input() loadMoreEnabled = true;
  @Output() load: EventEmitter<number> = new EventEmitter();
  @Output() showDetails: EventEmitter<Book> = new EventEmitter();
  books: Book[] = [];
  loadMore(): void { this.load.emit(this.books.length -1); }
  bookClicked(book: Book): void { this.showDetails.emit(book); }
}
