import { Injectable } from "@angular/core";
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

import { paths } from "./const";
import { Router } from "@angular/router";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if (!req.url.includes(paths.error)) {
    //   return next.handle(req);
    // }

    return next.handle(req).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        let errorObj: any
        if (errorObj instanceof HttpErrorResponse) {
          if (errorObj.status === 0) {
            return throwError('Unable to Connect to the Server')
          }
        }

        if (error.status !== 401) {
          // 401 handled in auth.interceptor
        }

        switch(error.status) {
          case 0:
            console.error('HttpErrorResponse - status: 0')
            // ERR_CONNECTION_TIMED_OUT, ERR_CONNECTION_REFUSED, ERR_EMPTY_RESPONSE, ERR_PROXY_CONNECTION_FAILED
            // ERR_NAME_NOT_RESOLVED nicht!!!
            console.log('Gerätefehler, Neustart durchführen, ggf. keine Verbindung')
            break

          case 400:
            console.log(`bad request`)
            break

          case 401: 
            console.log(`unauthorized`)
            alert('Autorisierung fehlt!')
            this._router.navigateByUrl('/login')
            break

          case 403:
            console.log(`forbidden`)
            break

          case 404:
            console.log(`not found`)
            break

          case 500:
          case 501:
          case 502:
          case 503:
            console.log(`5xx-er`) 
            break

          default:
            console.log(`default error`)
            break
        } 

        if (error.status == 0) {
          console.log(error.name)
        }
        console.log(error)
        return throwError(error);
      })
    );
  }
}