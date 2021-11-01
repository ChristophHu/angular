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
// import { User } from '../model/user.model'
import { BackendResponse } from '../model/backendresponse.model'

import { Animations } from 'src/app/shared/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  animations   : Animations
})
export class LoginComponent {
	opened: boolean = false
  	loginForm: FormGroup

	constructor( private _formBuilder: FormBuilder, private store: Store, private router: Router, private authService: AuthService) {
		this.loginForm = this._formBuilder.group({
			username: ['24225132', [Validators.required]],
			password: ['Abc123!', Validators.required]
		})
	}

	login() {
		const form = this.loginForm.value
		this.authService.login(form.username, form.password)
		  .pipe(
			tap((backendResponse: BackendResponse) => {
			  this.store.dispatch(login({ backendResponse }))
			  this.router.navigateByUrl('/mobile')
			})
		  )
		  .subscribe(
			noop,
			() => alert('Login Failed')
		  )
	}

	toggleChangeLog() {
		console.log(this.opened)
		this.opened = !this.opened
	}
}
