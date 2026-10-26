const express = require('express');
const axios = require('axios');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

// Register a new user
public_users.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  if (!isValid(username)) {
    return res.status(409).json({ message: "Username already exists" });
  }

  users.push({ username, password });
  return res.status(200).json({ message: "User successfully registered. Now you can login" });
});

// Task 1: Get the book list available in the shop
public_users.get('/', function (req, res) {
  return res.status(200).send(JSON.stringify(books, null, 4));
});

// Task 2: Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  if (books[isbn]) {
    return res.status(200).json(books[isbn]);
  } else {
    return res.status(404).json({ message: `Book with ISBN ${isbn} not found` });
  }
});

// Task 3: Get book details based on author
public_users.get('/author/:author', function (req, res) {
  const author = req.params.author.toLowerCase();
  const matchedBooks = [];

  const keys = Object.keys(books);
  keys.forEach((key) => {
    if (books[key].author.toLowerCase() === author) {
      matchedBooks.push({
        isbn: key,
        title: books[key].title,
        reviews: books[key].reviews
      });
    }
  });

  if (matchedBooks.length > 0) {
    return res.status(200).json({ booksbyauthor: matchedBooks });
  } else {
    return res.status(404).json({ message: `No books found by author '${req.params.author}'` });
  }
});

// Task 4: Get all books based on title
public_users.get('/title/:title', function (req, res) {
  const title = req.params.title.toLowerCase();
  const matchedBooks = [];

  const keys = Object.keys(books);
  keys.forEach((key) => {
    if (books[key].title.toLowerCase() === title) {
      matchedBooks.push({
        isbn: key,
        author: books[key].author,
        reviews: books[key].reviews
      });
    }
  });

  if (matchedBooks.length > 0) {
    return res.status(200).json({ booksbytitle: matchedBooks });
  } else {
    return res.status(404).json({ message: `No books found with title '${req.params.title}'` });
  }
});

// Task 5: Get book review
public_users.get('/review/:isbn', function (req, res) {
  const isbn = req.params.isbn;
  if (books[isbn]) {
    return res.status(200).json(books[isbn].reviews);
  } else {
    return res.status(404).json({ message: `Book with ISBN ${isbn} not found` });
  }
});

// ============================================================================
// Tasks 10-13: Async / Promise Implementation with Axios
// ============================================================================

// Task 10: Get all books using Promise / Async-Await
const getAllBooksAsync = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(books);
    } catch (err) {
      reject(err);
    }
  });
};

public_users.get('/async/books', async (req, res) => {
  try {
    const allBooks = await getAllBooksAsync();
    return res.status(200).json(allBooks);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching books asynchronously", error: error.message });
  }
});

// Task 11: Get book by ISBN using Promise / Async-Await
const getBookByISBNAsync = (isbn) => {
  return new Promise((resolve, reject) => {
    if (books[isbn]) {
      resolve(books[isbn]);
    } else {
      reject(new Error(`Book with ISBN ${isbn} not found`));
    }
  });
};

public_users.get('/async/isbn/:isbn', async (req, res) => {
  const { isbn } = req.params;
  try {
    const book = await getBookByISBNAsync(isbn);
    return res.status(200).json(book);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});

// Task 12: Get book by Author using Promise / Async-Await
const getBooksByAuthorAsync = (author) => {
  return new Promise((resolve, reject) => {
    const targetAuthor = author.toLowerCase();
    const matched = [];
    Object.keys(books).forEach((key) => {
      if (books[key].author.toLowerCase() === targetAuthor) {
        matched.push({ isbn: key, ...books[key] });
      }
    });

    if (matched.length > 0) {
      resolve(matched);
    } else {
      reject(new Error(`No books found by author '${author}'`));
    }
  });
};

public_users.get('/async/author/:author', async (req, res) => {
  const { author } = req.params;
  try {
    const authorBooks = await getBooksByAuthorAsync(author);
    return res.status(200).json({ booksbyauthor: authorBooks });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});

// Task 13: Get book by Title using Promise / Async-Await
const getBooksByTitleAsync = (title) => {
  return new Promise((resolve, reject) => {
    const targetTitle = title.toLowerCase();
    const matched = [];
    Object.keys(books).forEach((key) => {
      if (books[key].title.toLowerCase() === targetTitle) {
        matched.push({ isbn: key, ...books[key] });
      }
    });

    if (matched.length > 0) {
      resolve(matched);
    } else {
      reject(new Error(`No books found with title '${title}'`));
    }
  });
};

public_users.get('/async/title/:title', async (req, res) => {
  const { title } = req.params;
  try {
    const titleBooks = await getBooksByTitleAsync(title);
    return res.status(200).json({ booksbytitle: titleBooks });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});

module.exports.general = public_users;
