import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs'
import { BackendResponse } from './model/backendresponse.model'
import { environment } from '../../../environments/environment'

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
    // ohne:http://192.168.178.220/login/Login.asmx/login
    // map: https://map-appiis-1-v.int.polizei.berlin.de/login/Login.asmx/login
    const baseUrl   = environment.loginServerUrl
    // const baseUrl   = `https://map-appiis-1-v.int.polizei.berlin.de/login/Login.asmx/login`
    const packageid = environment.packageid
    // const packageid = `de.berlin.polizei.polwsp`

    return new Observable((observer) => {
      let xmlhttp = new XMLHttpRequest()

      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4) {
          if (xmlhttp.status == 200) {
            const jwt_token         = xmlhttp.getResponseHeader('Authorization')!.toString()
            const backend_token     = jwt_token.split(' ')[1]
            const json_jwt_payload  = JSON.parse(this.myatob(jwt_token.split('.')[1]))
            const allowed_apps_arr  = JSON.parse(json_jwt_payload.allowed_apps)
  
            // check for backend and login
            allowed_apps_arr.forEach((el: any) => {
              if (el.packageid == packageid) {
                const backendUrl = JSON.parse(el.config_json).backendurl
                console.log(backendUrl)
                console.log(backend_token)
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

  myatob(payload: string): string {
    try {
      return atob(payload);
      }
      catch(e)
      {
      return atob(this.base64UrlDecode(payload));
    }
  }

  backend_login(backendUrl: string, token: string): Observable<any> {
    return new Observable((observer) => {
      let xmlhttp = new XMLHttpRequest()

      xmlhttp.onreadystatechange = () => {
        console.log(xmlhttp.readyState)
        if (xmlhttp.readyState == 4) {
          if (xmlhttp.status == 200) {
            observer.next(xmlhttp.responseText)
          } else {
            console.log(xmlhttp)
            observer.error(xmlhttp)
          }
        }
      }
      xmlhttp.open('GET', `${backendUrl}/loginjwt`, true)
      xmlhttp.setRequestHeader('Authorization', `Bearer ${token}`)
      xmlhttp.send()
    })
  }

  base64UrlDecode(input: string): string {
    // Replace non-url compatible chars with base64 standard chars
    input = input
        .replace(/-/g, '+')
        .replace(/_/g, '/')

    // Pad out with standard base64 required padding characters
    var pad = input.length % 4;
    if(pad) {
      if(pad === 1) {
        throw new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding');
      }
      input += new Array(5-pad).join('=');
    }

    return input;
  }
}
