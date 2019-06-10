import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthorizationService } from '../services/authorization.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private _authorizationService: AuthorizationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this._authorizationService.logout();
        }

        return throwError(error);
      }));
  }
}
