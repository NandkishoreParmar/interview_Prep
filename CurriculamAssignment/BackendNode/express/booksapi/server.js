

const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const DB_PATH = path.join(__dirname, 'db.json');

app.use(bodyParser.json());

// Helper function to read database
const readDB = () => {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return { books: [] };
  }
};

// Helper function to write to database
const writeDB = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
};

// POST /books - Add a new book
app.post('/books', (req, res) => {
  const db = readDB();
  const newBook = {
    id: db.books.length > 0 ? Math.max(...db.books.map(b => b.id)) + 1 : 1,
    title: req.body.title,
    author: req.body.author,
    year: req.body.year
  };
  db.books.push(newBook);
  writeDB(db);
  res.status(201).json(newBook);
});

// GET /books - Get all books
app.get('/books', (req, res) => {
  const db = readDB();
  res.json(db.books);
});

// GET /books/:id - Get book by ID
app.get('/books/:id', (req, res) => {
  const db = readDB();
  const book = db.books.find(b => b.id === parseInt(req.params.id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// PUT /books/:id - Update book by ID
app.put('/books/:id', (req, res) => {
  const db = readDB();
  const index = db.books.findIndex(b => b.id === parseInt(req.params.id));
  if (index !== -1) {
    db.books[index] = { 
      ...db.books[index], 
      ...req.body,
      id: db.books[index].id // Ensure ID doesn't change
    };
    writeDB(db);
    res.json(db.books[index]);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// DELETE /books/:id - Delete book by ID
app.delete('/books/:id', (req, res) => {
  const db = readDB();
  const index = db.books.findIndex(b => b.id === parseInt(req.params.id));
  if (index !== -1) {
    const deletedBook = db.books.splice(index, 1)[0];
    writeDB(db);
    res.json(deletedBook);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// GET /books/search - Search books by author or title (with partial match)
app.get('/books/search', (req, res) => {
  const db = readDB();
  const authorQuery = req.query.author?.toLowerCase();
  const titleQuery = req.query.title?.toLowerCase();

  if (!authorQuery && !titleQuery) {
    return res.status(400).json({ message: 'Author or title parameter is required' });
  }

  let matchingBooks = db.books;

  if (authorQuery) {
    matchingBooks = matchingBooks.filter(b => 
      b.author.toLowerCase().includes(authorQuery)
    );
  }

  if (titleQuery) {
    matchingBooks = matchingBooks.filter(b => 
      b.title.toLowerCase().includes(titleQuery)
    );
  }

  if (matchingBooks.length > 0) {
    res.json(matchingBooks);
  } else {
    res.json({ message: 'No books found' });
  }
});

// Handle 404 - Not Found
app.use((req, res) => {
  res.status(404).json({ error: '404 Not Found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});