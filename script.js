let bookList = [];
function Book(title, author, readingStatus){
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
}

let books = document.getElementsByClassName('books');
for (i = 0; i<books.length; i++){
    bookList.push(new Book(books[i].childNodes[0].innerHTML, books[i].childNodes[2].innerHTML, true));
}

localStorage.setItem('bookArray', JSON.stringify(bookList));

let newBookButton = document.getElementById('newButton');
let shelf = document.getElementById('shelf');
let shelfOuterBox = document.getElementById('shelfOuterBox');

newBookButton.addEventListener('click', ()=>{
    //window.location.href = 'form.html'; //Find a way to display this form on the main page instead of window.open()

    let formBox = document.createElement('div')
    shelfOuterBox.appendChild(formBox);

    let formIframe = document.createElement('iframe');
    formIframe.style.width = '500px';
    formIframe.style.height = '300px';
    formIframe.style.marginTop = '2%';
    formIframe.style.border='none';
    formIframe.src = 'form.html';
    formBox.appendChild(formIframe);
})