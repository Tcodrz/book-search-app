import { CacheService } from './../../core/services/cach.service';
import { Book } from './../../state/interface/book.interface';
import { Injectable } from '@angular/core';

export interface QueryObject {
  intitle: string;
  inauthor: string;
  inpublisher: string;
  subject: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {
  private readonly params = '&langRestrict=english&maxResults=20';

  constructor(
    private cache: CacheService
  ) { }
  buildQuery(options: QueryObject, startIndex?: number): string {
    const query = [];
    for (const key of Object.keys(options)) {
      if (options[key as keyof QueryObject])
        query.push([key, options[key as keyof QueryObject]].join(':'));
    }
    let queryStr = query.join('+') + this.params;
    if (startIndex) queryStr += `&startIndex=${startIndex}`;
    return queryStr;
  }
  isValidQuery(query: string): boolean { return query.split('&')[0].length > 0; }
  addBookToWishtList(book: Book): void {
    let wishlist = this.cache.getItem<Book[]>('wishlist');
    if (wishlist) {
      const isInWishList = wishlist.findIndex(b => b.id === book.id) >= 0;
      if (!isInWishList) wishlist = [...wishlist, book];
    }
    else wishlist = [book];
    this.cache.setItem<Book[]>('wishlist', wishlist);
  }
  removeBookFromWishList(book: Book): void {
    let wishlist = this.cache.getItem<Book[]>('wishlist');
    if (wishlist) {
      wishlist = wishlist.filter(b => b.id !== book.id);
      this.cache.setItem<Book[]>('wishlist', wishlist);
    }
  }
  clearWishList(): void {
    this.cache.setItem<Book[]>('wishlist', []);
  }
}
