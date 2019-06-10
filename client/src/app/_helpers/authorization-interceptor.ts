import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TokenStorageKey } from '../constants/storage.constants';


@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenFromStorage = localStorage.getItem(TokenStorageKey);
    if (tokenFromStorage) {
      request = request.clone({
        setHeaders: {
          Authorization: tokenFromStorage
        }
      });
    }

    return next.handle(request);
  }
}
