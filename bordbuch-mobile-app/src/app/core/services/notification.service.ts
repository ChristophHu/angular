import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {
    private _notifications: ReplaySubject<string> = new ReplaySubject<string>(1);

    constructor() { }

    /** 
     * @type {Function}
     * @return {Observable<string>}
     * */
    get notifications$(): Observable<string> {
        return this._notifications.asObservable();
    }

    /** 
     * @type {Function} 
     * @param {string} message
     * */
    create(message: string) {
        this._notifications.next(message)
    }
}
