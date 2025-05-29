const library = {
  books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

  addBook(book) {
    const { title, author, year } = book;
    if (!title || !author || !year) {
      console.log("Book information is incomplete.");
      return;
    }
    this.books.push({ title, author, year });
    console.log(`Book "${title}" added successfully.`);
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title);
  },

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);
    if (index !== -1) {
      const removedBook = this.books.splice(index, 1)[0];
      console.log(`Book "${removedBook.title}" removed successfully.`);
    } else {
      console.log("Book not found.");
    }
  }
};

library.addBook({ author: "George Orwell", year: 1949 });
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

console.log(library.books.length);

console.log(library.findBookByTitle("1984"));

library.removeBook("The Hobbit");
console.log(library.books.length);
