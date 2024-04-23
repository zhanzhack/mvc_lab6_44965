
class Book {
  constructor(id, title, author, year, available = true) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.available = available;
  }

  static getAll() {
    return [
      new Book(1, 'Crime and Punishment', 'Fyodor Dostoevsky', 1866),
      new Book(2, 'Moby-Dick', 'Herman Melville', 1851),
      new Book(3, 'The Picture of Dorian Gray', 'Oscar Wilde', 1890),
      new Book(4, 'Frankenstein', 'Mary Shelley', 1818),
      new Book(5, 'War and Peace', 'Leo Tolstoy', 1869)
    ];
  }
}

module.exports = Book;
  