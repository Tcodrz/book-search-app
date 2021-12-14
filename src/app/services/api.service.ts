import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Volume } from './../state/interface/volume.interface';

export interface Book {
  id: string;
  selfLink: string;
  searchInfo: { textSnippet: string } | null;
  volumeInfo: Volume;
}

interface ApiResponse {
  items: Book[];
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiEndpoint = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }
  searchBooks(query: string): Observable<Book[]> {
    return this.http.get<ApiResponse>(`${this.apiEndpoint}?q=${query}&key=${environment.booksApiKey}`)
    .pipe(map(response => response.items))
  }
}
