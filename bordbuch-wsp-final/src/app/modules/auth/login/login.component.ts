// angular
import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

// rxjs
import { noop } from 'rxjs'
import { tap } from 'rxjs/operators'

// ngrx
import { Store } from '@ngrx/store'
import { login } from '../state/actions'

// service
import { AuthService } from '../auth.service'

// model
import { User } from '../model/user.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  	loginForm: FormGroup

	constructor( private _formBuilder: FormBuilder, private store: Store, private router: Router, private authService: AuthService) {
		this.loginForm = this._formBuilder.group({
			username: ['', [Validators.required]],
			password: ['', Validators.required]
		})
	}

	login() {
		const form = this.loginForm.value
		this.authService.login(form.email, form.password)
		  .pipe(
			tap((user: User) => {
			  this.store.dispatch(login({ user }))
			  this.router.navigateByUrl('/mobile')
			})
		  )
		  .subscribe(
			noop,
			() => alert('Login Failed')
		  )
	}
}
