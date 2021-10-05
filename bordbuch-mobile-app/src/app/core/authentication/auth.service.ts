import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Router } from '@angular/router'
import { User } from '../models/user'
import { environment } from '../../../environments/environment'
import { AppService } from '../services/app.service'
import { LocationService } from '../services/location.service'

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private currentUserSubject: BehaviorSubject<User>
	public currentUser: Observable<User>
	private tokenExpirationTimer: any

	constructor(private http: HttpClient, private router: Router, private appService: AppService, private locationService: LocationService) {
		this.currentUserSubject = new BehaviorSubject<User>(
			JSON.parse(localStorage.getItem('currentUser')!)
		);
		this.currentUser = this.currentUserSubject.asObservable()
	}

	public get currentUserValue(): User {
		return this.currentUserSubject.value
	}

	// private httpOptions = {
    //     headers: new HttpHeaders({
    //         'Content-Type': 'application/x-www-form-urlencoded',
	// 		'Authorization': 'Basic MjQyMjUyMjA6UGEkJHcwcmQ='
    //     })
    // }

	login(username: string, password: string) {
		// console.log(`${username}:${password}`)
		// console.log(btoa(`${username}:${password}`))
		// console.log(atob(btoa(`${username}:${password}`)))
		// param: btoa(`${username}:${password}`), 
		// console.log(atob('MjQyMjUyMjA6UGEkJHcwcmQ='))
		const auth = btoa(`${username}:${password}`)

		return this.http.get<any>(`http://192.168.178.220/login/Login.asmx/login`, {
			headers: new HttpHeaders({
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': `Basic ${auth}`
			})
		}).pipe(
			map(user => {
				console.log(user)
			})
		)
		// return this.http.post<any>(`http://localhost:3001/auth/login`, { username, password }).pipe( // Fehler any ersetzen
		// 	map(user => {
		// 		if (user && user.access_token) {
		// 			localStorage.setItem('currentUser', JSON.stringify(user))
		// 			this.currentUserSubject.next(user)
		// 			this.autoLogout(5*60*1000)
		// 		}

		// 		return user
		// 	})
		// );
	}

	logout() {
		this.appService.checkPositionStop()
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
			console.log('auto logout')
			this.logout()
		}, expDuration)
	}
}
