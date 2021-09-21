import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from 'src/app/core/authentication/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
	isClosedLoginMenu: boolean = true

  	loginForm: FormGroup
	submitted = false
	returnUrl: string = '/'
	error: string = ''

	constructor( private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authService: AuthService ) {
    this.loginForm = this.formBuilder.group({
			username: ['24225131', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
			password: ['password', Validators.required]
		})
  }

	ngOnInit() {
		// reset login status
		this.authService.logout()

		// get return url from route parameters or default to '/'
		this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/'
	}

	get f() {
		return this.loginForm.controls
	}

	onSubmit() {
		this.submitted = true

		if (this.loginForm.invalid) {
			return
		}

		this.authService
			.login(this.f.username.value, this.f.password.value)
			.pipe() // Fehler: .pipe(first())
			.subscribe(
				data => {
					this.error = ''
					this.router.navigate(['auswahl']) // Fehler: this.returnUrl
				},
				error => {
					console.log(error)
					this.error = error
				}
			)
	}

	administration() {
		if (this.loginForm.invalid) {
			return
		}

		this.authService
			.login(this.f.username.value, this.f.password.value)
			.pipe() // Fehler: .pipe(first())
			.subscribe(
				data => {
					this.error = ''
					this.router.navigate(['/admin']) // Fehler: this.returnUrl
				},
				error => {
					console.log(error)
					this.error = error
				}
			)
	}

	service() {
		if (this.loginForm.invalid) {
			return
		}

		this.authService
			.login(this.f.username.value, this.f.password.value)
			.pipe() // Fehler: .pipe(first())
			.subscribe(
				data => {
					this.error = ''
					this.router.navigate(['/service']) // Fehler: this.returnUrl
				},
				error => {
					console.log(error)
					this.error = error
				}
			)
	}

	leitung() {
		if (this.loginForm.invalid) {
			return
		}

		this.authService
			.login(this.f.username.value, this.f.password.value)
			.pipe() // Fehler: .pipe(first())
			.subscribe(
				data => {
					this.error = ''
					this.router.navigate(['/admin']) // Fehler: this.returnUrl
				},
				error => {
					console.log(error)
					this.error = error
				}
			)
	}
}
