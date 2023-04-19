const myLibrary = [];

function Book(title, author, pages, read) {
  this.Title = title;
  this.Author = author;
  this.Pages = pages;
  this.Read = read;
}

const form = document.querySelector('form');
const newBook = document.querySelector(".newBook");

newBook.addEventListener('click', () => {
  if (form.style.display === "none") {
    // Change the display of the form to block
    form.style.display = "block";
  }
});




const books = document.querySelector('#books');

const book1 = new Book('libro1', 'a', 3, 'no');
myLibrary.push(book1);
const book2 = new Book('nanita', 'b', 30, 'yes');
myLibrary.push(book2);
const book3 = new Book('Brothers Karamazov', 'Fiodor Dostoyevksy', 13, 'no');
myLibrary.push(book3);
const book4 = new Book('libro4', 'd', 300, 'yes');
myLibrary.push(book4);

for (let i = 0; i < myLibrary.length; i++) {
  const book_container = document.createElement('div');
  book_container.classList.add('book_container');
  books.appendChild(book_container);

  const libro = document.createElement('div');
  libro.classList.add('libro');
  for (let j = 0; j < Object.keys(myLibrary[i]).length; j++) {
    libro.textContent += `${Object.keys(myLibrary[i])[j]}: ${Object.values(myLibrary[i])[j]} `;
  }
  book_container.appendChild(libro);
}
