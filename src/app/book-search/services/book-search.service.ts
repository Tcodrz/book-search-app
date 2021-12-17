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
}
