import * as i0 from '@angular/core';
import { Component, Input, Injectable, ViewContainerRef, ViewChild, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

var NotificationType;
(function (NotificationType) {
    NotificationType["Success"] = "success";
    NotificationType["Error"] = "error";
    NotificationType["Alert"] = "alert";
    NotificationType["Info"] = "info";
    NotificationType["Warn"] = "warn";
})(NotificationType || (NotificationType = {}));

class NotificationComponent {
    constructor() {
        this.title = 'Title';
        this.type = NotificationType.Success;
    }
    ngOnInit() {
        var Notification = document.getElementById("notification");
        Notification.style.transform = "translateX(150%)";
        Notification.classList.remove("hidden");
        setTimeout(function () {
            Notification.style.transform = "translateX(0%)";
        }, 200);
    }
    closeModal() {
        let Notification = document.getElementById("notification");
        Notification.style.transform = "translateX(150%)";
    }
}
NotificationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NotificationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NotificationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: NotificationComponent, selector: "notification", inputs: { title: "title", type: "type" }, ngImport: i0, template: "<div role=\"alert\" class=\"sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 xl:w-5/12 mx-auto absolute left-0 sm:left-auto right-0 sm:top-0 sm:w-6/12 md:w-3/5 justify-between w-11/12 bg-white dark:bg-gray-800 shadow-lg rounded flex sm:flex-row flex-col transition duration-150 ease-in-out\" id=\"notification\">\n    <div class=\"sm:px-6 p-2 flex mt-4 sm:mt-0 ml-4 sm:ml-0 items-center justify-center sm:rounded-tl sm:rounded-bl w-12 h-12 sm:h-auto sm:w-auto text-white\" [ngClass]=\"{'bg-red-400': (type == 'alert'), 'bg-green-400': (type == 'success')}\">\n        <button class=\"w-8 h-8 focus:outline-none\">\n          <!-- <icons class=\"w-8 h-8 stroke-1 stroke-current\" name=\"menu-off\"></icons> -->\n        </button>\n    </div>\n    <div class=\"flex flex-col justify-center xl:-ml-4 pl-4 xl:pl-1 sm:w-3/5 pt-4 sm:pb-4 pb-2\">\n        <p class=\"text-lg text-gray-800 dark:text-gray-100 font-semibold pb-1\">{{ title }}</p>\n        <p class=\"text-sm text-gray-600 dark:text-gray-400 font-normal\">You have {{ type }}successfully completed the survey. You will soon receive a reward email. Stay tuned.</p>\n    </div>\n    <div class=\"flex sm:flex-col sm:justify-center sm:border-l dark:border-gray-700 items-center border-gray-300 sm:w-1/6 pl-4 sm:pl-0\">\n        <div class=\"sm:pt-4 pb-4 sm:border-b dark:border-gray-700 border-gray-300 sm:w-full flex sm:justify-center\">\n            <span class=\"sm:text-sm text-xs text-green-400 font-bold mr-4 sm:mr-0 cursor-pointer\">View</span>\n        </div>\n        <div class=\"sm:pt-4 pb-4 flex sm:justify-center w-full cursor-pointer\" (click)=\"closeModal()\">\n            <span class=\"sm:text-sm text-xs text-gray-600 dark:text-gray-400 cursor-pointer\">Dismiss</span>\n        </div>\n    </div>\n</div>", styles: [""], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NotificationComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'notification',
                    templateUrl: './notification.component.html',
                    styleUrls: ['./notification.component.css']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], type: [{
                type: Input
            }] } });

class NotificationsService {
    constructor() {
        // https://jasonwatmore.com/post/2019/07/05/angular-8-alert-toaster-notifications
        this.subject = new Subject();
    }
    onAlert() {
        return this.subject.asObservable();
    }
    alert(notification) {
        this.subject.next(notification);
    }
}
NotificationsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NotificationsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NotificationsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NotificationsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NotificationsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NotificationsContainerComponent {
    constructor(componentFactoryResolver, _NotificationsService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this._NotificationsService = _NotificationsService;
        this.componentClass = NotificationComponent;
        this.components = [];
    }
    ngOnInit() {
        this._NotificationsService.onAlert().subscribe(data => console.log(data));
    }
    addNotification(notification) {
        // Create component dynamically inside the ng-template
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentClass);
        const componentRef = this.notifications.createComponent(componentFactory);
        componentRef.instance.title = notification.title;
        // componentRef.instance.type = notification.type
        // Push the component so that we can keep track of which components are created
        this.components.push(componentRef);
    }
    removeNotification() {
        // Find the component
        const component = this.components.find((component) => component.instance instanceof this.componentClass);
        const componentIndex = this.components.indexOf(component);
        if (componentIndex !== -1) {
            // Remove component from both view and array
            this.notifications.remove(this.components.length - 1);
            this.components.splice(componentIndex, 1);
        }
    }
}
NotificationsContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NotificationsContainerComponent, deps: [{ token: i0.ComponentFactoryResolver }, { token: NotificationsService }], target: i0.ɵɵFactoryTarget.Component });
NotificationsContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: NotificationsContainerComponent, selector: "notifications-container", viewQueries: [{ propertyName: "notifications", first: true, predicate: ["notifications"], descendants: true, read: ViewContainerRef }], ngImport: i0, template: "<p>notifications-container works!</p>\n<button (click)=\"addNotification({ content: '', title: 'Titel' })\">ADD</button>\n<br>\n<button (click)=\"addNotification({ content: '', title: 'Titel' })\">ADD_Danger</button>\n<br>\n<button (click)=\"removeNotification()\">REMOVE</button>\n<ng-template #notifications>\n\n</ng-template>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NotificationsContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'notifications-container',
                    templateUrl: './notifications-container.component.html',
                    styleUrls: ['./notifications-container.component.css']
                }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: NotificationsService }]; }, propDecorators: { notifications: [{
                type: ViewChild,
                args: ['notifications', { read: ViewContainerRef }]
            }] } });

class NotificationsModule {
}
NotificationsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NotificationsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NotificationsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NotificationsModule, declarations: [NotificationsContainerComponent,
        NotificationComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule], exports: [NotificationsContainerComponent] });
NotificationsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NotificationsModule, providers: [
        NotificationsService
    ], imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NotificationsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NotificationsContainerComponent,
                        NotificationComponent
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule
                    ],
                    exports: [
                        NotificationsContainerComponent
                    ], providers: [
                        NotificationsService
                    ]
                }]
        }] });

/*
 * Public API Surface of notifications
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NotificationComponent, NotificationsContainerComponent, NotificationsModule, NotificationsService };
//# sourceMappingURL=notifications.js.map
