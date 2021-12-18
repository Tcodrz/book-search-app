import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../../state/interface/book.interface';


interface ApiResponse {
  items: Book[];
  totalItems: number;
}

@Injectable({ providedIn: 'root'  })
export class ApiService {
  private readonly apiEndpoint = 'https://www.googleapis.com/books/v1/volumes';

  constructor(
    private http: HttpClient
  ) { }
  searchBooks(query: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiEndpoint}?q=${query}&key=${environment.booksApiKey}`);
  }
}
