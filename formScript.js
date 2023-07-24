function Book(title, author, readingStatus){
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
}

let submitButton = document.getElementById('submitButton');
let bookTitleField = document.getElementById('title');
let authorNameField = document.getElementById('authorName');
let radioButtons = document.querySelectorAll('input[name="readOrNot"]');
let form = document.getElementById('form');
let bookList = JSON.parse(localStorage.getItem('bookArray'));


submitButton.addEventListener('click', ()=>{
    let book = new Book();
    parent.document.scripts.namedItem
    localStorage.setItem('bookName', bookTitleField.value);
    localStorage.setItem('authorName', authorNameField.value);
    book.title = localStorage.getItem('bookName');
    book.author = localStorage.getItem('authorName');
    
    for (const radioButton of radioButtons){
        if (radioButton.checked){
            selection = radioButton.value;
            break;
        }
    }
    if (selection == 'Yes'){
        localStorage.setItem('readOrNot', true);
    }
    else{
        localStorage.setItem('readOrNot', false);
    }

    book.readingStatus = localStorage.getItem('readOrNot');
    bookList.push(book);
    console.log(bookList[3]);
    localStorage.setItem('bookArray', JSON.stringify(bookList));

    let shelf = parent.document.getElementById('shelf');
    let shelfOuterBox = parent.document.getElementById('shelfOuterBox');
    
    let newBook = document.createElement('div');
        newBook.className = 'books';
        shelf.appendChild(newBook);

        let bookTitle = document.createElement('div');
        bookTitle.className = 'bookName';
        newBook.appendChild(bookTitle);
        bookTitle.innerHTML = localStorage.getItem('bookName');

        let authorName = document.createElement('div');
        authorName.className = 'authorName';
        newBook.appendChild(authorName);
        authorName.innerHTML = localStorage.getItem('authorName');
})