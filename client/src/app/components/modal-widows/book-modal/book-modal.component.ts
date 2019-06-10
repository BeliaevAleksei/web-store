import { Component, OnInit, Inject } from '@angular/core';

import { ObjectState } from 'src/app/constants/object-state.constants';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Book } from 'src/app/types/book';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BooksComponent } from '../../pages/books/books.component';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.css']
})
export class BookModalComponent implements OnInit {
  public displayEditing = ObjectState.Edit;
  public displayAdding = ObjectState.Add;

  public isRequesting = false;

  public book: Book;
  public displayState: number;
  public bookForm: FormGroup;

  constructor(
    private _bookService: BookService,
    public dialogRef: MatDialogRef<BooksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    dialogRef.disableClose = false;
    console.log(data.book)
    this.book = data.book;
    this.displayState = data.action;
    this.initializeForm();
  }

  ngOnInit() {
  }

  initializeForm() {
    this.bookForm = new FormGroup({
      'title': new FormControl(this.book.title || '', Validators.required),
      'description': new FormControl(this.book.description || '', Validators.required),
      'author': new FormControl(this.book.author || '', Validators.required),
      'price': new FormControl(this.book.price || '', Validators.required)
    });
  }

  save() {
    const book = this.getBookFromBookForm();
    console.log(book)
    this._bookService.updateBook(book).subscribe((res) => {
      console.log(res)
      this.closeModalWidow(this.data);
    }, (error) => {
      console.error(error);
    });
  }

  closeModalWidow(data?) {
    this.dialogRef.close(data);
  }

  add() {
    const book = this.getBookFromBookForm();
    console.log(book)
    this._bookService.addBook(book).subscribe((res) => {
      console.log(res)
      this.closeModalWidow(this.data);
    }, (error) => {
      console.error(error);
    });
  }

  delete() {
    this._bookService.deleteBook(this.data.book._id).subscribe((res) => {
      console.log(res)
      this.closeModalWidow(this.data);
    }, (error) => {
      console.error(error);
    });
  }

  private getBookFromBookForm(): Book {
    let outputBook = new Book();
    outputBook = this.bookForm.value;
    outputBook.id = this.data.book._id;

    return outputBook;
  }
}
