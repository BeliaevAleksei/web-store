import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ApiService } from './api.service';

import { User } from '../types/user';

import { TokenStorageKey } from '../constants/storage.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  errorMessage: string;

  constructor(private apiService: ApiService, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    const user = new User();
    user.username = email;
    user.password = password;

    return new Observable<any>((observer: any): any => {
      this.apiService.login(user)
        .subscribe((res) => {
          localStorage.setItem(TokenStorageKey, res.token);
          observer.next();
          observer.complete();
        }, (error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }

  logout(returnUrl?: string) {
    localStorage.removeItem(TokenStorageKey);
    this.router.navigate(['login']);
  }

  signup(email: string, password: string): Observable<any> {
    const user = new User();
    user.username = email;
    user.password = password;

    return new Observable<any>((observer: any): any => {
      this.apiService.signup(user)
        .subscribe((res) => {
          observer.next();
          observer.complete();
        }, (error) => {
          observer.error(error);
          observer.complete();
        });
    });
  }
}
