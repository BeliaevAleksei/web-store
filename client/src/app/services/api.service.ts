import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Book } from '../types/book';
import { Film } from '../types/film';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _apiUrl: string;
  private _options;

  constructor(private _http: HttpClient) {
    this._apiUrl = environment.appUrl;

    this.initializeHeaderDetails();
  }

  initializeHeaderDetails() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Origin, Authorization, Content-Type, Content-Disposition, Content-Length, X-Auth-Token',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Origin': '*',
    });
    this._options = { headers: headers };
  }

  // films
  getSelfFilms(): Observable<Film> {
    const url = `${this._apiUrl}/api/film/self`;
    return this._http.get<Film>(url).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
