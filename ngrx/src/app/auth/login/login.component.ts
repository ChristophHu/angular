import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { noop } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthActions } from '../state';
import { AuthService } from '../auth.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  loginForm: FormGroup
  constructor(private fb: FormBuilder, private store: Store, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: [],
      password: []
    })
  }

  login() {
    const form = this.loginForm.value
    this.authService.login(form.email, form.password)
      .pipe(
        tap((user: User) => {
          console.log(user);
          this.store.dispatch(AuthActions.login({	user }))
          this.router.navigateByUrl('/admin')
        })
      )
      .subscribe(
        noop,
        () => alert('Login Failed')
      )
  }
}
