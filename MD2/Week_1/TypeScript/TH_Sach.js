var Book = /** @class */ (function () {
    function Book(title, author, alreadyRead) {
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }
    return Book;
}());
var bookList = [];
var books1 = new Book("title 1", "author 1", true);
var books2 = new Book("title2", "author 2", false);
bookList.push(books1, books2);
function showBook(bookList) {
    for (var i = 0; i < bookList.length; i++) {
        if (bookList[i].alreadyRead) {
            console.log("Read - Title: " + bookList[i].title + " - Author: " + bookList[i].author);
        }
        else {
            console.log("UnRead - Title: " + bookList[i].title + " - Author: " + bookList[i].author);
        }
    }
}
showBook(bookList);
