import { Injectable } from "@angular/core"
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse } from "@angular/common/http"
import { Notification, NotificationType, ExceptionType } from 'projects/rxjs-notifications/src/lib/model/notification.model'
import { Observable, throwError } from "rxjs"
import { catchError, retry, take } from "rxjs/operators"
import { Store } from "@ngrx/store"
import { RootStoreState } from "src/app/store/root-store.state"
import { logout } from "src/app/modules/auth/state/actions"
import { RxjsNotificationsService } from "projects/rxjs-notifications/src/lib/service/rxjs-notifications.service"
// import { paths } from "./const";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private store: Store<RootStoreState>, private _RxjsNotificationService: RxjsNotificationsService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if (!req.url.includes(paths.error)) {
    //   return next.handle(req)
    // }

    return next.handle(req).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        // if (error.status !== 401) {
        //   // 401 handled in auth.interceptor
        // }

        switch(error.status) {
          case 400:
            console.error(`bad request`)
            break; 

          case 401: 
            const notification_401: Notification = { content: 'Sie sind nicht autorisiert.', title: 'Authentication', type: NotificationType.Alert, exception: ExceptionType.OK }
            console.error(`unauthorized`)
            this.logout()
            break; 

          case 403: 
            console.error(`forbidden`)
            break; 

          case 404:
            const notification_404: Notification = { content: 'Es wurden keine Daten zurückgegeben', title: 'Daten', type: NotificationType.Warn, exception: ExceptionType.OK }
            this._RxjsNotificationService.addAndResponseNotification(notification_404).pipe(take(1)).subscribe(data => console.log(data))
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

  logout() {
    this.store.dispatch(logout())
  }
}