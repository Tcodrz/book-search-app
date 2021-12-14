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

  constructor() { }

  buildQuery(options: QueryObject): string {
    const query = [];
    for (const key of Object.keys(options)) {
      if (options[key as keyof QueryObject])
        query.push([key, options[key as keyof QueryObject]].join(':'));
    }
    return query.join('+');
  }
}
