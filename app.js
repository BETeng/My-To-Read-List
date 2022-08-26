function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function UI() {}

UI.prototype.addBookToList = function (book) {
  console.log(book);
};

document.getElementById('book-form').addEventListener('submit', function (e) {
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;
  e.preventDefault();

  const book = new Book(title, author, isbn);

  const ui = new UI();
  console.log(ui);
  ui.addBookToList(book);
});
