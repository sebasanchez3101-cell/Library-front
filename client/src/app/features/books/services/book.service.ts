import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookWithDetails } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/v1/books';

  getBooks(): Observable<BookWithDetails[]> {
    return this.http.get<BookWithDetails[]>(this.apiUrl);
  }
}
