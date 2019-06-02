import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  errorMessage: string;

  constructor() {}

  login(email: string, password: string): any {

  }

  logout(returnUrl?: string): void {
  }
}
