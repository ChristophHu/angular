// angular
import { Component, ViewEncapsulation } from '@angular/core'
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
import { ChangelogComponent } from './changelog/changelog.component'
import { ModalService } from 'src/app/shared/components/modal/modal.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  animations   : Animations,
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
	opened: boolean = false
  	loginForm: FormGroup
	hide = true

	constructor(
		private _formBuilder: FormBuilder,
		private store: Store,
		private router: Router,
		private authService: AuthService,
		private modalService: ModalService<ChangelogComponent>
		) {
		this.loginForm = this._formBuilder.group({
			username: ['24225132', [Validators.required]],
			password: ['', [Validators.required]]
		})
	}

	login() {
		const form = this.loginForm.value
		this.authService.login(form.username, form.password)
		  .pipe(
			tap((backendResponse: BackendResponse) => {
			  this.store.dispatch(login({ backendResponse }))
			  this.router.navigateByUrl('/')
			})
		  )
		  .subscribe(
			noop,
			() => alert('Login Failed')
		  )
	}

	async openChangeLogModal() {
		const { ChangelogComponent } = await import(
		  './changelog/changelog.component'
		)
		this.modalService.open(ChangelogComponent, {})
	  }
}
