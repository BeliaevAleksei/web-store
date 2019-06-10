import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Book } from '../types/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  errorMessage: string;

  constructor(private apiService: ApiService) { }

  getBooks() {
    return new Observable<any>((observer: any): any => {
      this.apiService.getBooks()
        .subscribe((res) => {
          observer.next(res);
          observer.complete();
        }, (error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }

  addBook(book: Book): Observable<any> {
    return new Observable<any>((observer: any): any => {
      this.apiService.addBook(book)
        .subscribe((res) => {
          observer.next(res);
          observer.complete();
        }, (error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }

  updateBook(book: Book): Observable<any> {
    return new Observable<any>((observer: any): any => {
      this.apiService.updateBook(book)
        .subscribe((res) => {
          observer.next(res);
          observer.complete();
        }, (error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }

  deleteBook(bookId: string): Observable<any> {
    return new Observable<any>((observer: any): any => {
      this.apiService.deleteBook(bookId)
        .subscribe((res) => {
          observer.next(res);
          observer.complete();
        }, (error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }
}
