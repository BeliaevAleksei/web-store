import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from '../components/pages/login-page/login-page.component';
import { SignUpComponent } from '../components/pages/sign-up/sign-up.component';
import { BooksComponent } from '../components/pages/books/books.component';

const APP_ROUTES: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent,
  //   canActivate: [AuthGuard],
  //   data: {
  //     expectedRoles: [RoleNames.admin, RoleNames.manager, RoleNames.user, RoleNames.accountant]
  //   }
  // },
  { path: 'login', component: LoginPageComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: 'books',
    component: BooksComponent,
    data: { title: 'Book List' }
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
