import { Injectable } from "@angular/core"
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse } from "@angular/common/http"
import { Notification, NotificationType, ExceptionType } from 'projects/rxjs-notifications/src/lib/model/notification.model'
import { Observable, throwError } from "rxjs"
import { catchError, retry, take } from "rxjs/operators"
import { RxjsNotificationsService } from "dist/rxjs-notifications/public-api"

// import { paths } from "./const";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _RxjsNotificationService: RxjsNotificationsService) {}

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
              console.error(`bad request`)
              break; 

          case 401: 
              console.error(`unauthorized`)
              break; 

          case 403: 
              console.error(`forbidden`)
              break; 

          case 404:
              const notification: Notification = { content: 'Es wurden keine Daten zurückgegeben', title: 'Daten', type: NotificationType.Alert, exception: ExceptionType.OK }
              this._RxjsNotificationService.addAndResponseNotification(notification).pipe(take(1)).subscribe(data => console.log(data))
              console.error(`not found`)
              break;

          case 500:
            console.error(`5xx-er`)
            break

          default:
            console.error(`default error`)
            break; 

      }
      return throwError(error)
      })
    );
  }
}