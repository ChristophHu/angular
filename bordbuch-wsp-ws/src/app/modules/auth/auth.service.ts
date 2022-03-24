import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs'
import { BackendResponse } from './model/backendresponse.model'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): Observable<BackendResponse> {
    return this.auth_login(username, password)
  }

  auth_login(username: string, password: string): Observable<BackendResponse> {
    const auth      = btoa(`${username}:${password}`)
    const baseUrl   = environment.loginServerUrl
    const packageid = environment.packageid

    return new Observable((observer) => {
      let xmlhttp = new XMLHttpRequest()

      xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4) {
          if (xmlhttp.status == 200) {
            const jwt_token         = xmlhttp.getResponseHeader('Authorization')!.toString()
            const backend_token     = jwt_token.split(' ')[1]
            const json_jwt_payload  = JSON.parse(this.b64DecodeUnicode(jwt_token.split('.')[1]))
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

  b64DecodeUnicode(str: string) {
    return decodeURIComponent(Array.prototype.map.call(atob(str), (c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join('')) 
  }

  // myatob(payload: string): string {
  //   try {
  //     return atob(payload);
  //     }
  //     catch(e)
  //     {
  //     return atob(this.base64UrlDecode(payload));
  //   }
  // }

  // base64UrlDecode(input: string): string {
  //   // Replace non-url compatible chars with base64 standard chars
  //   input = input
  //       .replace(/-/g, '+')
  //       .replace(/_/g, '/')

  //   // Pad out with standard base64 required padding characters
  //   var pad = input.length % 4;
  //   if(pad) {
  //     if(pad === 1) {
  //       throw new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding');
  //     }
  //     input += new Array(5-pad).join('=');
  //   }

  //   return input;
  // }
}
