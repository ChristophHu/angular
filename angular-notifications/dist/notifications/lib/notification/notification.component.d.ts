import { OnInit } from '@angular/core';
import { NotificationType } from '../model/notification-type.enum';
import * as i0 from "@angular/core";
export declare class NotificationComponent implements OnInit {
    title: string;
    type: NotificationType;
    constructor();
    ngOnInit(): void;
    closeModal(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationComponent, "notification", never, { "title": "title"; "type": "type"; }, {}, never, never>;
}
