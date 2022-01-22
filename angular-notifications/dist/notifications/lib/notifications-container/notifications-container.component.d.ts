import { ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { Notification } from '../model/notification.model';
import { NotificationsService } from '../notifications.service';
import * as i0 from "@angular/core";
export declare class NotificationsContainerComponent implements OnInit {
    private componentFactoryResolver;
    private _NotificationsService;
    notifications: ViewContainerRef;
    componentClass: typeof NotificationComponent;
    components: any[];
    constructor(componentFactoryResolver: ComponentFactoryResolver, _NotificationsService: NotificationsService);
    ngOnInit(): void;
    addNotification(notification: Notification): void;
    removeNotification(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationsContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationsContainerComponent, "notifications-container", never, {}, {}, never, never>;
}
