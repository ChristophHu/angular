// angular
import { Component, Inject, ViewEncapsulation } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

// rxjs
import { noop } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'

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
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

export interface Error {
	code: string;
	message: string;
}

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
		public dialog: MatDialog,
		private _formBuilder: FormBuilder,
		private store: Store,
		private router: Router,
		private authService: AuthService,
		private modalService: ModalService<ChangelogComponent>
		) {
		this.loginForm = this._formBuilder.group({
			username: ['', [Validators.required]],
			password: ['', [Validators.required]]
		})
	}

	login() {
		if (!this.loginForm.value.username || !this.loginForm.value.password) return
		const form = this.loginForm.value
		this.authService.login(form.username, form.password)
		.pipe(
			tap((backendResponse: BackendResponse) => {
			  this.store.dispatch(login({ backendResponse }))
			  this.router.navigateByUrl('/')
			})
		)

		.subscribe(noop, (error) => {
			this.dialog.open(ErrorDialog, { data: error })
			console.error(`code: ${error.code}, message: ${error.message}`)
		})
	}

	async openChangeLogModal() {
		const { ChangelogComponent } = await import(
		  './changelog/changelog.component'
		)
		this.modalService.open(ChangelogComponent, {})
	}
}

@Component({
	selector: 'error-dialog',
	template: `
		<h1 mat-dialog-title class="text-xl font-bold">Fehler in der Anmeldung</h1>
		<div mat-dialog-content>{{ data.message }}</div>
	`,
})
export class ErrorDialog {
	constructor(
		public dialogRef: MatDialogRef<ErrorDialog>,
		@Inject(MAT_DIALOG_DATA) public data: Error,
	) {}
}
