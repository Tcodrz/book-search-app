import { BookSearchService } from './book-search/services/book-search.service';
import { ApiService } from './services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'book-search';
  constructor(
   private api: ApiService,
   private bookSearchService: BookSearchService
  ) { }
  ngOnInit(): void {
    const query = this.bookSearchService.buildQuery({
      intitle: 'inspector gadget',
      inauthor: '',
      inpublisher: '',
      subject: 'music'
    });
    this.api.searchBooks(query + '&langRestrict=english&maxResults=20').subscribe(books => console.log(books));
  }
}
