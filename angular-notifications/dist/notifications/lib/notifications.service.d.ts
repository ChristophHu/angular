import { Notification } from './model/notification.model';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NotificationsService {
    private subject;
    constructor();
    onAlert(): Observable<Notification>;
    alert(notification: Notification): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NotificationsService>;
}
