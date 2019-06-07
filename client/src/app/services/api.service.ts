import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Book } from '../types/book';
import { Film } from '../types/film';
import { User } from '../types/user';

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

  login(user: User): Observable<any> {
    const url = `${this._apiUrl}/api/signin`;

    return this._http.post<any>(url, user).pipe(
      map((response: any) => response),
      catchError((error: Response) => {
        return throwError(error);
      })
    );
  }

  signup(user: User): Observable<any> {
    const url = `${this._apiUrl}/api/signup`;
    console.log(url)
    console.log(user)
    return this._http.post<any>(url, user).pipe(
      map((response: any) => response),
      catchError((error: Response) => {
        return throwError(error);
      })
    );
  }
}
