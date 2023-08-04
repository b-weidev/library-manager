import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  bookList: any = []
  updateBookField: string = ''
  updateBookValue: string = ''
  updateBookIndex: number = -1
  newBook: Book = {
    title: '',
    author: '',
    genre: '',
    available: true
  }
  searchField: string = ''
  searchValue: string = ''
  editMode: number[] = []
  editBook: Book = {
    title: '',
    author: '',
    genre: '',
    available: true
  }
  someValue: string = "hello world"

  constructor(private _bookService: BookService) { }
  
  ngOnInit(): void {
    this.getBookList()
  }

  getBookList() {
    this._bookService.getBookList().subscribe(responseData => {
      this.bookList = responseData
    }) 
  }

  createBook() {
    this._bookService.createBook(this.newBook).subscribe(responseData => {
      this.getBookList()
    })
  }

  updateBook(index: number) {
    this.editMode.splice(this.editMode.indexOf(index), 1) // Delete edit index from editlist
    this._bookService.updateBook(this.editBook, index).subscribe(responseData => {
      this.getBookList()
    })
  }

  updateAvailability(updateIndex: number) {
    this._bookService.updateAvailability(updateIndex, this.editBook).subscribe(responseData => {
      this.getBookList()
    })
  }

  deleteBook(bookIndex: number) {
    this._bookService.deleteBook(bookIndex).subscribe(responseData => {
      this.getBookList()
    })
  }

  getAvailable() {
    this._bookService.getAvailable().subscribe(responseData => {
      this.bookList = responseData
    })
  }

  searchBook() {
    this._bookService.searchBook(this.searchField, this.searchValue).subscribe(responseData => {
      this.bookList = responseData
    })
  }

}
