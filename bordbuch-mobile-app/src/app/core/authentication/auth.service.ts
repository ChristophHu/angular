import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, tap } from 'rxjs/operators'
import { Router } from '@angular/router'
import { User } from '../models/user'
import { environment } from '../../../environments/environment'
import { AppService } from '../services/app.service'
import { LocationService } from '../services/location.service'
import { Role } from '../models/role'

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private currentUserSubject: BehaviorSubject<User>
	public currentUser: Observable<User>
	private tokenExpirationTimer: any
	private backend: any

	constructor(private http: HttpClient, private router: Router, private appService: AppService, private locationService: LocationService) {
		this.currentUserSubject = new BehaviorSubject<User>(
			// JSON.parse(localStorage.getItem('currentUser')!)
			{ username: localStorage.getItem('currentUser')!, password: '', firstName: '', lastName: '', role: Role.bootsstreifendienst}
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

	login(username: string, password: string): Promise<any> {
		localStorage.clear()
		return new Promise((resolve, reject) => {
			const auth = btoa(`${username}:${password}`)

			let xmlhttp = new XMLHttpRequest()
			xmlhttp.onreadystatechange = () => {
				if (xmlhttp.readyState == 4) {
					if (xmlhttp.status == 200) {
						const token = xmlhttp.getResponseHeader('Authorization')!.toString().split(' ')[1]
						this.appService.t(token)
						const jwtpayload = token.split('.')[1]
						const jwttoken = JSON.parse(atob(jwtpayload))
						console.log(jwttoken)
						// console.log(jwttoken.sub)
						localStorage.setItem('currentUser', jwttoken.sub)
						console.log(JSON.parse(jwttoken.allowed_apps))
						const arr = JSON.parse(jwttoken.allowed_apps)
						arr.forEach((el: any) => { 
							if(el.packageid == 'de.berlin.polizei.polwsp') {
								const backendurl = el.config_json
								const backend = JSON.parse(backendurl).backendurl
								localStorage.setItem('backendUrl', backend)
								this.loginjwt(backend, token).then((result:any)=>{
									resolve(true);
								}).catch(()=>{
									reject();
								});
							}
						})
	
					} else {
						console.log(xmlhttp.status)
						reject();
					}
				}
			}
	
			// de.berlin.polizei.polwsp
	
			xmlhttp.open('GET', `http://192.168.178.220/login/Login.asmx/login`, true)
			xmlhttp.setRequestHeader('Authorization', `Basic ${auth}`)
			xmlhttp.send()
		})
		

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

	loginjwt(backendUrl: string, token: string): Promise<any> {
		return new Promise((resolve, reject) => {
			let xmlhttp = new XMLHttpRequest()
			xmlhttp.onreadystatechange = () => {
				if (xmlhttp.readyState == 4) {
					if (xmlhttp.status == 200) {
						console.log(xmlhttp.responseText)
						resolve(true)
					} else {
						console.error(xmlhttp.status)
						reject()
					}
				}
			}
	
			xmlhttp.open('GET', `${backendUrl}/loginjwt`, true)
			xmlhttp.setRequestHeader('Authorization', `Bearer ${token}`)
			// xmlhttp.setRequestHeader('content-type', `text/plain`)
			xmlhttp.send()
		})
	}

	logout() {
		this.appService.checkPositionStop()
		this.appService.reset()
		

		this.logoutapi(this.backend, this.appService.gett()).then((result: any) => {
			console.log('logout')
		}).catch(() => { console.error('error')})

		// if (this.tokenExpirationTimer) {
		// 	clearTimeout(this.tokenExpirationTimer)
		// }
		// this.tokenExpirationTimer = null

		// localStorage.removeItem('currentUser')
		// this.currentUserSubject.next(null!)
		this.router.navigate(['/login'])
	}

	logoutapi(backendUrl: string, token: string): Promise<any> {
		return new Promise((resolve, reject) => {
			let xmlhttp = new XMLHttpRequest()
			xmlhttp.onreadystatechange = () => {
				if (xmlhttp.readyState == 4) {
					if (xmlhttp.status == 200) {
						console.log(xmlhttp.responseText)
						resolve(true)
					} else {
						console.error(xmlhttp.status)
						reject()
					}
				}
			}

			console.log(localStorage.getItem('currentUser'))
			console.log(this.appService.gett())
	
			xmlhttp.open('GET', `${localStorage.getItem('backendUrl')}/logout?persnr=${localStorage.getItem('currentUser')}`, true)
			xmlhttp.setRequestHeader('Authorization', `Bearer ${this.appService.gett()}`)
			// xmlhttp.setRequestHeader('content-type', `text/plain`)
			xmlhttp.send()
		})
	}

	autoLogout(expDuration: number) {
		this.tokenExpirationTimer = setTimeout(() => {
			console.log('auto logout')
			this.logout()
		}, expDuration)
	}
}
