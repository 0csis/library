const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = prompt("What's the title of the book?");
  const author = prompt("What's the name of the author?");
  const pages = prompt('How many pages does it have?');
  const read = prompt('Have you read it already?');
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

const book1 = new Book('libro1', 'a', 3, no);
const book2 = new Book('libro2', 'b', 30, yes);
const book3 = new Book('libro3', 'c', 13, no);
const book4 = new Book('libro4', 'd', 300, yes);