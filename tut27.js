console.log('Exercise: Emplementing a library calss');

// create a class library and implement the following:
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class Library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList() {
        this.bookList.forEach(element => {
            console.log(element)
        });
    }

    issueBook(bookname, user) {
        // console.log(this.issuedBooks [bookname]);
        if (this.issuedBooks[bookname] ==undefined) {
        this.issuedBooks[bookname] = user;
        }
        else {
            console.log("This book is already issued");
        }
    }

    returnBook(bookname) {
        delete this.issuedBooks[bookname];
    }

}



