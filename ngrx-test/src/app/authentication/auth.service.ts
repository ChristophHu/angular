import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { EMPTY, Observable } from 'rxjs'

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private http: HttpClient, private router: Router) {}

	login(username: string, password: string): Observable<any> {
		return EMPTY
	}

	logout() {

	}


	autoLogout(expDuration: number) {

	}
}
