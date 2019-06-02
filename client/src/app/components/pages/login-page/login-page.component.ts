import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { AuthorizationService } from 'src/app/services/authorization.service';
// import { LocaleService } from 'src/app/services/locale.service';
// import { Patterns } from 'src/app/constants/patterns';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  isGetting = false;
  error: string = null;

  constructor(
    private _authorizationService: AuthorizationService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }

  initForm() {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  signIn() {
    this.isGetting = true;
    this._authorizationService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(() => {
      this._router.navigate([this.returnUrl]);
    }).add(() => this.isGetting = false);
  }
}
