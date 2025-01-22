const bookTitle = document.getElementById("booktitle");
const bookAuthor = document.getElementById("bookauthor");
const bookLength = document.getElementById("booklength");
const btn = document.querySelector("button");
const books = document.getElementById("books");

class Book {
  constructor(title='Unknown', author='Unknown', length='0') {
    this.title = title;
    this.author = author;
    this.length = length;
  }
}

class Library {
  constructor() {
    this.books = [
      { title: 'War and Peace', author: 'Leo Tolstoy', length: 1392 },
      { title: 'Starship Troopers', author: 'Robert A. Heinlein', length: 264 },
      { title: 'East of Eden', author: 'John Steinbeck', length: 601 },
      { title: 'Nevernight', author: 'Jay Kristoff', length: 448 },
    ];
  }

  addBook(newBook) {
    this.books.push(newBook);
  }

}

const library = new Library();


function showLibrary() {
  books.innerHTML = "";
  library.books.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookcard");
    bookCard.innerHTML = `
      <h2>${book.title}</h2>
      <p>by ${book.author}<p>
      <p class="length">${book.length} pages<p>
      <div class="buttons">
        <button class="read" data-index="${index}">Read: ${book.read ? 'Yes' : 'No'}</button>
        <button class="remove" data-index="${index}">Remove</button>
      </div>
    `;
    books.appendChild(bookCard);

    const read = bookCard.querySelector(".read");
    read.addEventListener("click", () => {
      book.read = !book.read;
      showLibrary();
    });

    const remove = bookCard.querySelector(".remove");
    remove.addEventListener("click", () => {
      library.books.splice(index, 1);
      showLibrary();
    });
  })
}

const addBookToLibrary = function (event) {
  event.preventDefault();
  const newBook = new Book(bookTitle.value, bookAuthor.value, bookLength.value);
  library.addBook(newBook);
  bookTitle.value = "";
  bookAuthor.value = "";
  bookLength.value = "";
  showLibrary();
}

btn.addEventListener('click', addBookToLibrary);
showLibrary();


