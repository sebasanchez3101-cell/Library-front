import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BookService } from '../services/book.service';
import { BooksPage } from './books-page';

describe('BooksPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksPage],
      providers: [
        {
          provide: BookService,
          useValue: { getBooks: () => of([]) },
        },
      ],
    }).compileComponents();
  });

  it('should display the books page and empty state', () => {
    const fixture = TestBed.createComponent(BooksPage);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
    expect(fixture.nativeElement.querySelector('h1')?.textContent).toContain('Tu librería');
    expect(fixture.nativeElement.textContent).toContain(
      'No hay libros registrados en el backend.',
    );
  });
});
