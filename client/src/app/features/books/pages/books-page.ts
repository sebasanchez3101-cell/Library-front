import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Books } from '../components/books/books';
import { BookWithDetails } from '../models/book.model';
import { BookService } from '../services/book.service';

@Component({
  imports: [Books, FormsModule],
  templateUrl: './books-page.html',
  styleUrl: './books-page.css',
})
export class BooksPage implements OnInit {
  private readonly bookService = inject(BookService);

  readonly books = signal<BookWithDetails[]>([]);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);
  newTitle = '';

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (books) => {
        this.books.set(books);
        this.loading.set(false);
      },
      error: (error: Error) => {
        this.error.set(`No se pudieron cargar los libros: ${error.message}`);
        this.loading.set(false);
      },
    });
  }

  save(): void {
    const title = this.newTitle.trim();
    if (!title) {
      return;
    }

    alert(`Simulando guardar el libro con título: ${title}`);
  }
}
