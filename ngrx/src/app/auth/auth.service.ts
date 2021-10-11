import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { from, Observable } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = ''

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User> {
    // return this.http.post(this.baseUrl, { email, password })
    const user = from([{ id: '24225132', email: 'christoph@hu.de', role: 'Admin' }])
    return user
  }
}
