import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../../state/interface/book.interface';


interface ApiResponse {
  items: Book[];
  totalItems: number;
}

@Injectable({ providedIn: 'root'  })
export class ApiService {
  private readonly apiEndpoint = 'https://www.googleapis.com/books/v1/volumes';


  constructor(private http: HttpClient) { }
  searchBooks(query: string): Observable<ApiResponse> {
    const isValidQuery = query.split('&')[0].length > 0;
    if (!isValidQuery) return of({ items: [], totalItems: 0 });
    return this.http.get<ApiResponse>(`${this.apiEndpoint}?q=${query}&key=${environment.booksApiKey}`);
  }
}
