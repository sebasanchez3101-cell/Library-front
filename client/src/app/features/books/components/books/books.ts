import { Component, input } from '@angular/core';
import { BookWithDetails } from '../../models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  readonly books = input<BookWithDetails[]>([]);
}
