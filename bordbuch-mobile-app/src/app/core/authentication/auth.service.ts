import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { User } from '../models/user'
import { environment } from '../../../environments/environment'
import { AppService } from '../services/app.service'

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private currentUserSubject: BehaviorSubject<User>
	public currentUser: Observable<User>
	private tokenExpirationTimer: any

	constructor(private http: HttpClient, private router: Router, private appService: AppService) {
		this.currentUserSubject = new BehaviorSubject<User>(
			JSON.parse(localStorage.getItem('currentUser')!)
		);
		this.currentUser = this.currentUserSubject.asObservable()
	}

	public get currentUserValue(): User {
		return this.currentUserSubject.value
	}

	login(username: string, password: string) {
		return this.http.post<any>(`http://localhost:3001/auth/login`, { username, password }).pipe( // Fehler any ersetzen
			map(user => {
				if (user && user.access_token) {
					localStorage.setItem('currentUser', JSON.stringify(user))
					this.currentUserSubject.next(user)
					this.autoLogout(5*60*1000)
				}

				return user
			})
		);
	}

	logout() {
		this.appService.reset()
		
		localStorage.removeItem('currentUser')
		this.currentUserSubject.next(null!)
		if (this.tokenExpirationTimer) {
			clearTimeout(this.tokenExpirationTimer)
		}
		this.tokenExpirationTimer = null
		this.router.navigate(['/login'])
	}

	autoLogout(expDuration: number) {
		this.tokenExpirationTimer = setTimeout(() => {
			this.logout()
		}, expDuration)
	}
}
