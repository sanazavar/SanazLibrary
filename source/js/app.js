const titleElm = document.getElementById('title')
const author = document.getElementById('author')
const year = document.getElementById('year')
const addBtn = document.querySelector('.btn')
const form = document.getElementById('book-form')
const bookList = document.querySelector('#book-list')




let booksArray = []


function addNewBook() {

    let newTitle = titleElm.value
    let newAuthor = author.value
    let newYear = year.value



    if (titleElm.value==='' || author.value ==='' || year.value==='') {
        alert('تمام فیلدهارو پر نمایید')

    }


     else {

        let newBookObj = {
            id: booksArray.length + 1,
            title: newTitle,
            author: newAuthor,
            year: newYear
        }
        booksArray.push(newBookObj)
        console.log(booksArray)
        setLocalStorage(booksArray)
        newBookGenerate(booksArray)
    }
}



function newBookGenerate(bookslist) {
   
    bookList.innerHTML=''

    bookslist.forEach(function (book) {
        bookTr = document.createElement('tr')

        let bookTitle = document.createElement('th')
        bookTitle.innerHTML = book.title

        let bookAuthor = document.createElement('th')
        bookAuthor.innerHTML = book.author

        let bookYear = document.createElement('th')
        bookYear.innerHTML = book.year

        bookTr.append(bookTitle, bookAuthor, bookYear)

        bookList.append(bookTr)

        // console.log(bookTr)


    })


}




function setLocalStorage() {
    localStorage.setItem('books', JSON.stringify(booksArray))
    makeEmptyElems()
}


addBtn.addEventListener('click', addNewBook)
form.addEventListener('submit', function (event) {
    event.preventDefault()
})

function makeEmptyElems() {
    titleElm.value = ''
    author.value = ''
    year.value = ''
}


function getLocalStorageBooks(){
    let getLocalStorageArray=JSON.parse(localStorage.getItem('books'))
    if(getLocalStorageArray){
        booksArray=getLocalStorageArray
        newBookGenerate(booksArray)

    }
}


window.addEventListener('load',getLocalStorageBooks)