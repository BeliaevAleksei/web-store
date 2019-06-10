import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupData = { username: '', password: '' };
  message = '';

  constructor(private _authorizationService: AuthorizationService,
    private router: Router) { }

  ngOnInit() {
  }

  signup() {
    this._authorizationService.signup(this.signupData.username, this.signupData.password)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigate(['login']);
      }, (err) => {
        this.message = err.error.msg;
      });
  }
}
