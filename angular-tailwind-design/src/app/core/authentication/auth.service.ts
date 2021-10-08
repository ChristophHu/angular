import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { User } from '../models/user'
import { Role } from '../models/role'

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private currentUserSubject: BehaviorSubject<User>
	public currentUser: Observable<User>
	private tokenExpirationTimer: any
	private backend: any

	private token: string = ''
	private role: string = ''

	constructor(private http: HttpClient, private router: Router) {
		this.currentUserSubject = new BehaviorSubject<User>(
			{ username: localStorage.getItem('currentUser')!, password: '', firstName: '', lastName: '', role: Role.bootsstreifendienst}
		);
		this.currentUser = this.currentUserSubject.asObservable()
	}

	public get currentUserValue(): User {
		return this.currentUserSubject.value
	}

    public get tokenValue(): string {
        return this.token
    }
    public get roleValue(): string {
        return this.role
    }


	login(username: string, password: string): Promise<any> {
		return new Promise((resolve, reject) => {
			const auth = btoa(`${username}:${password}`)

			let xmlhttp = new XMLHttpRequest()
			xmlhttp.onreadystatechange = () => {
				if (xmlhttp.readyState == 4) {
					if (xmlhttp.status == 200) {
						this.token = xmlhttp.getResponseHeader('Authorization')!.toString().split(' ')[1]
						const jwtpayload = this.token.split('.')[1]
						const jwttoken = JSON.parse(atob(jwtpayload))
						localStorage.setItem('currentUser', jwttoken.sub)
						const arr = JSON.parse(jwttoken.allowed_apps)
						arr.forEach((el: any) => { 
							if(el.packageid == 'de.berlin.polizei.polwsp') {
								const backendurl = el.config_json
								const backend = JSON.parse(backendurl).backendurl
								localStorage.setItem('backendUrl', backend)
								this.loginjwt(backend, this.token).then((result: any)=>{
									resolve(true);
								}).catch(()=>{
									reject();
								});
							}
						})
						this.autoLogout(jwttoken.exp - (new Date().getTime() / 1000) >> 0)
					} else {
						console.log(xmlhttp.status)
						reject();
					}
				}
			}
	
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
						this.role = JSON.parse(xmlhttp.responseText).rolle
						resolve(true)
					} else {
						console.error(xmlhttp.status)
						reject()
					}
				}
			}
	
			xmlhttp.open('GET', `${backendUrl}/loginjwt`, true)
			xmlhttp.setRequestHeader('Authorization', `Bearer ${token}`)
			xmlhttp.send()
		})
	}

	logout() {
		this.logoutapi(this.backend, this.token).then((result: any) => {
			console.log('logout')
			localStorage.removeItem('currentUser')
			this.currentUserSubject.next(null!)
		}).catch(() => { console.error('error')})

		if (this.tokenExpirationTimer) {
			clearTimeout(this.tokenExpirationTimer)
		}
		this.tokenExpirationTimer = null

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
	
			xmlhttp.open('GET', `${localStorage.getItem('backendUrl')}/logout?persnr=${localStorage.getItem('currentUser')}`, true)
			xmlhttp.setRequestHeader('Authorization', `Bearer ${this.token}`)
			xmlhttp.send()
		})
	}

	autoLogout(expDuration: number) {
		this.tokenExpirationTimer = setTimeout(() => {
			console.log('auto logout')
			this.logout()
		}, expDuration*1000)
	}
}
