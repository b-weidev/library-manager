const bookList = require('../model/Book')

module.exports = {
    getBookList,
    createBook, 
    updateBook,
    updateAvailability,
    deleteBook,
    getAvailable,
    searchBook
}

function getBookList(request, response) {
    response.json(bookList)
}

function createBook(request, response) {
    try {
        const newBook = request.body
        bookList.push(newBook)
        response.status(200).json({message: 'Book successfully added'})
    } catch (err) {
        response.status(400).json({message: err})
    }
}

function updateBook(request, response) {
    try {
        const updateIndex = request.params.updateIndex
        const updateBook = request.body

        // Update book values
        bookList[updateIndex].title = updateBook.title
        bookList[updateIndex].author = updateBook.author
        bookList[updateIndex].genre = updateBook.genre
        
        response.status(200).json({message: 'Book successfully updated'})
    } catch (err) {
        response.status(400).json({message: err})
        console.log(err)
    }

}

function updateAvailability(request, response) {
    try {
        const updateIndex = request.params.updateIndex
        if (bookList[updateIndex].available == true) {
            bookList[updateIndex].available = false
        }
        else {
            bookList[updateIndex].available = true
        }
        response.status(200).json({message: 'Availability successfully updated'})
    } catch (err) {
        response.status(400).json({message: err})
        console.log(err)
    }
}

function deleteBook(request, response) {
    try {
        const deleteIndex = request.params.deleteIndex
        console.log(deleteIndex)
        bookList.splice(deleteIndex, 1)
        response.status(200).json({message: 'Book successfully deleted'})
    } catch (err) {
        response.status(400).json({message: err})
    }
}

function getAvailable(request, response) {
    const availableBooks = bookList.filter((book) => book.available == true)
    response.json(availableBooks)
}

function searchBook(request, response) {
    const searchField = request.params.searchField
    const searchValue = request.params.searchValue
    const filteredBookList = bookList.filter((book) => book[searchField] == searchValue)
    response.json(filteredBookList)
}