import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  errorMessage: string;

  constructor(private apiService: ApiService) { }

  login(email: string, password: string): Observable<any> {
    const user = new User();
    user.username = email;
    user.password = password;

    return new Observable<any>((observer: any): any => {
      this.apiService.login(user)
        .subscribe((res) => {
          localStorage.setItem('jwtToken', res.token);
          observer.next();
          observer.complete();
        }, (error) => {

        });
    });
  }

  // logout(returnUrl?: string): Observable<any> {
  // }

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

        });
    });
  }
}
