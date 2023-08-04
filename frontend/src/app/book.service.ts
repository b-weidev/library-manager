import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private SERVER_URL: string = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getBookList() {
    return this.http.get(this.SERVER_URL + 'library')
  }

  createBook(newBook: Book) {
    return this.http.post(this.SERVER_URL + 'createBook', newBook)
  }

  updateBook(editBook: Book, updateIndex: number) {
    return this.http.put(`${this.SERVER_URL}updateBook/${updateIndex}`, editBook)
  }

  updateAvailability(bookIndex: number, editBook: Book) {
    return this.http.put(this.SERVER_URL + 'updateAvailability/' + bookIndex, editBook)
  }
  
  deleteBook(bookIndex: number) {
    return this.http.delete(`${this.SERVER_URL}deleteBook/${bookIndex}`)
  }

  getAvailable() {
    return this.http.get(this.SERVER_URL + 'getAvailable')
  }

  searchBook(searchField: string, searchValue: string) {
    return this.http.get(`${this.SERVER_URL}search/${searchField}/${searchValue}`)
  }

}
