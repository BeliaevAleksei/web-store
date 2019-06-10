import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { BooksComponent } from './components/pages/books/books.component';
import { ErrorHandlerInterceptor, AuthorizationInterceptor } from './_helpers';
import { BookModalComponent } from './components/modal-widows/book-modal/book-modal.component';
import { MaterialModule } from './modules/material-module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpComponent,
    BooksComponent,
    BookModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  entryComponents: [
    BookModalComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
