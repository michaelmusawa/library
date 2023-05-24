let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = () => {
    console.log(`I'm reading ${this.title} by ${this.author}. I have ${this.pages} pages.`);
  };
  this.info = () => {
    console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPages: ${this.pages}`);
  };
}

let book1 = new Book('Harry Potter', 'J.K. Rowling', 500);
let book2 = new Book('The Hunger Games', 'Suzanne Collins', 300);
let book3 = new Book('The Dark Tower', 'George R.R. Martin', 500);
let book4 = new Book('The Chronicles of Narnia', 'George R.R. Martin', 500);
let book5 = new Book('The Hunger Games: Mockingjay - Part 2', 'Suzanne Collins', 300);
let book6 = new Book('The Hunger Games: Mockingjay - Part 3', 'Suzanne Collins', 300);

myLibrary.push(book1, book2, book3, book4, book5, book6);

const bookContainer = document.querySelector(".book-container");

myLibrary.forEach(book => {
  const displayBookImg = document.createElement('img');
  displayBookImg.classList.toggle('img');
  const bookTitle = document.createElement('p');
  bookTitle.classList.toggle('title');
  bookTitle.innerText = `Title: ${book.title}`;
  const bookAuthor = document.createElement('p');
  bookAuthor.classList.toggle('author');
  bookAuthor.innerText = `Author: ${book.author}`;
  const bookPages = document.createElement('p');
  bookPages.classList.toggle('pages');
  bookPages.innerText = `Pages: ${book.pages}`;

  const bookDiv = document.createElement('div');
  bookDiv.classList.toggle('bookDiv')
  bookDiv.appendChild(displayBookImg);
  bookDiv.appendChild(bookTitle);
  bookDiv.appendChild(bookAuthor);
  bookDiv.appendChild(bookPages);
  
  bookContainer.appendChild(bookDiv);
});

const addBook = document.querySelector('#add-book');
addBook.addEventListener('click', () => {
  createForm ();

});

  const form_addBook = document.querySelector('.add-book-form')


  function createForm () {
    const form = document.createElement('form');
    form.classList.toggle('form');
    const title = document.createElement('input');
    title.classList.toggle('title');
    title.type = 'text';
    title.name = 'title';
    title.placeholder = 'Title';
    const author = document.createElement('input');
    author.classList.toggle('author');
    author.type = 'text';
    author.name = 'author';
    author.placeholder = 'Author';
    const pages = document.createElement('input');
    pages.classList.toggle('pages');
    pages.type = 'text';
    pages.name = 'pages';
    pages.placeholder = 'Pages';
    const submit = document.createElement('input');
    submit.classList.toggle('submit');
    submit.type = 'submit';
    submit.value = 'Add Book';
    const cancel = document.createElement('input');
    cancel.classList.toggle('cancel');
    cancel.type = 'button';
    cancel.value = 'Cancel';


    const form_div = document.createElement('div');
    form_div.classList.toggle('form-div');
    form_div.appendChild(form);
    form.appendChild(title);
    form.appendChild(author);
    form.appendChild(pages);
    form.appendChild(submit);
    form.appendChild(cancel);
    form_addBook.appendChild(form_div);

    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form submission
      
      const newBook = new Book(title.value, author.value, parseInt(pages.value));
      myLibrary.push(newBook);
      console.log(`New book added: ${newBook.title}`);
      
      // Clear the form fields
      title.value = '';
      author.value = '';
      pages.value = '';
      
    });

  
    return form;
  }
  