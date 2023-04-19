const myLibrary = [];

function Book(title, author, pages, read) {
  this.Title = title;
  this.Author = author;
  this.Pages = pages;
  this.Read = read;
}

const form = document.querySelector('form');
const newBook = document.querySelector('.newBook');

newBook.addEventListener('click', () => {
  if (form.style.display === 'none') {
    // Change the display of the form to block
    form.style.display = 'block';
  }
});

const books = document.querySelector('#books');

function getNewBook(event) {
  const title = document.getElementById('title').value ?
    document.getElementById('title').value : '______';
  const author =  document.getElementById('author').value ?
    document.getElementById('author').value : "____";
  const pages = document.getElementById('pages').value ?
    document.getElementById('pages').value : '_____';
  const read = document.getElementById('read').checked ? 'Yes' : 'No';
  addBookToLibrary(title, author, pages, read);
  document.querySelector('form').reset();
  form.style.display = 'none';
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read)
  myLibrary.push(book);

  const book_container = document.createElement('div');
  book_container.classList.add('book_container');
  books.appendChild(book_container);

  const libro = document.createElement('div');
  libro.classList.add('libro');
  const i = myLibrary.length - 1;
  for (let j = 0; j < Object.keys(myLibrary[i]).length; j++) {
    libro.textContent += `${Object.keys(myLibrary[i])[j]}: ${Object.values(myLibrary[i])[j]} `;
  }
  book_container.appendChild(libro);
}