class Book {
    title: string;
    author: string;
    alreadyRead: boolean;
    constructor(title: string, author: string, alreadyRead: boolean) {
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }
}

let bookList: Book[] = []
let books1 = new Book("title 1", "author 1", true)
let books2 = new Book("title2", "author 2", false)
bookList.push(books1, books2)


function showBook(bookList) {
    for(let i: number = 0; i < bookList.length; i++) {
        if(bookList[i].alreadyRead) {
            console.log("Read - Title: " + bookList[i].title + " - Author: " + bookList[i].author)
        }
        else {
            console.log("UnRead - Title: " + bookList[i].title + " - Author: " + bookList[i].author)
        }
    }
}

showBook(bookList)
