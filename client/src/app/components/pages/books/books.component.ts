import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/types/book';
import { ObjectState } from 'src/app/constants/object-state.constants';
import { MatDialog } from '@angular/material';
import { BookModalComponent } from '../../modal-widows/book-modal/book-modal.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: any;
  bookAction: number;
  selectedBook: Book;

  constructor(
    private bookService: BookService,
    private router: Router,
    public bookModal: MatDialog
  ) {
    this.getBooks();
  }

  ngOnInit() {}

  getBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
      console.log(this.books);
    }, err => {
      if (err.status === 401) {
        this.router.navigate(['login']);
      }
    });
  }

  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['login']);
  }

  create() {
    this.bookAction = ObjectState.Add;
    this.selectedBook = new Book();
    console.log(this.selectedBook)
    this.openModalWidow();
  }

  edit(book: Book) {
    this.bookAction = ObjectState.Edit;
    this.selectedBook = book;
    this.openModalWidow();
  }

  openModalWidow() {
    const dialogRef = this.bookModal.open(BookModalComponent, {
      width: '70vw',
      height: '70vh',
      disableClose: true,
      autoFocus: false,
      data: {
        book: this.selectedBook,
        action: this.bookAction
      }
    });

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        this.getBooks();
      }
    });
  }
}
