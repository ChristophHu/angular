import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { from, Observable } from 'rxjs';
import { BackendResponse } from './model/backendresponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<BackendResponse> { // User
    return this.auth_login(username, password)
  }

  auth_login(username: string, password: string): Observable<BackendResponse> {
    const auth      = btoa(`${username}:${password}`)
    const baseUrl   = `http://192.168.178.220/login/Login.asmx/login`
    const packageid = `de.berlin.polizei.polwsp`

    return new Observable((observer) => {
      let xmlhttp = new XMLHttpRequest()

      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4) {
          if (xmlhttp.status == 200) {
            const jwt_token         = xmlhttp.getResponseHeader('Authorization')!.toString()
            const backend_token     = jwt_token.split(' ')[1]
            const json_jwt_payload  = JSON.parse(atob(jwt_token.split('.')[1]))
            const allowed_apps_arr  = JSON.parse(json_jwt_payload.allowed_apps)
  
            // check for backend and login
            allowed_apps_arr.forEach((el: any) => {
              if (el.packageid == packageid) {
                const backendUrl = JSON.parse(el.config_json).backendurl
                this.backend_login(backendUrl, backend_token).subscribe(data => {
                  observer.next({
                    sub: json_jwt_payload.sub, 
                    exp: json_jwt_payload.exp, 
                    email: json_jwt_payload.email, 
                    given_name: json_jwt_payload.given_name, 
                    family_name: json_jwt_payload.family_name,
                    role: JSON.parse(data).rolle,
                    token: jwt_token,
                    backendUrl: backendUrl
                  })
                  }, error => observer.error(error)
                )
              }
            })
          }
        }
      }

      xmlhttp.open('GET', `${baseUrl}`, true)
      xmlhttp.setRequestHeader('Authorization', `Basic ${auth}`)
      xmlhttp.send()
    })
  }

  backend_login(backendUrl: string, token: string): Observable<any> {
    return new Observable((observer) => {
      let xmlhttp = new XMLHttpRequest()

      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4) {
          if (xmlhttp.status == 200) {
            observer.next(xmlhttp.responseText)
          } else {
            observer.error(xmlhttp)
          }
        }
      }

      xmlhttp.open('GET', `${backendUrl}/loginjwt`, true)
      xmlhttp.setRequestHeader('Authorization', `Bearer ${token}`)
      xmlhttp.send()
    })
  }
}
