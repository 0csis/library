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

const books = document.querySelector('#books');

const book1 = new Book('libro1', 'a', 3, 'no');
myLibrary.push(book1);
const book2 = new Book('libro2', 'b', 30, 'yes');
myLibrary.push(book2);
const book3 = new Book('libro3', 'c', 13, 'no');
myLibrary.push(book3);
const book4 = new Book('libro4', 'd', 300, 'yes');
myLibrary.push(book4);

console.log(book1.title);
console.log(Object.keys(myLibrary[0]).length);

for (let i = 0; i < myLibrary.length; i++) {
  for (let j = 0; j < Object.keys(myLibrary[i]).length; j++) {
    const libro = document.createElement('div');
    libro.classList.add('libro');
    libro.textContent = `${Object.keys(myLibrary[i])[j]}: ${Object.values(myLibrary[i])[j]}`;
    books.appendChild(libro);
  }
}
