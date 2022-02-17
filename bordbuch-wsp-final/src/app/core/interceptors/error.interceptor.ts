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
        if (error.status !== 401) {
          // 401 handled in auth.interceptor
        }

        switch(error.status) {
            case 400:
                console.log(`bad request`) 
                break; 

            case 401: 
                console.log(`unauthorized`)
                this._router.navigateByUrl('/login')
                break; 

            case 403: 
                console.log(`forbidden`) 
                break; 

            case 404: 
                console.log(`not found`) 
                this._router.navigateByUrl('/login')
                break;

            case 500:
            case 501:
            case 502:
            case 503:
              console.log(`5xx-er`) 
              break

            default: { 
                console.log(`default error`) 
                break; 
            }
        } 

        return throwError(error);
      })
    );
  }
}