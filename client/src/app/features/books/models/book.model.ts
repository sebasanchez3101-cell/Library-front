export interface Author {
  _id?: string;
  name: string;
  nationality: string;
}

export interface Genre {
  _id?: string;
  name: string;
}

export interface Book {
  _id: string;
  title: string;
  isbn: string;
  authorId: string;
  genreId: string;
  year?: number;
  available: boolean;
}

export interface BookWithDetails extends Book {
  author: Author | null;
  genre: Genre | null;
}
