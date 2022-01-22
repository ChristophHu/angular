(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('notifications', ['exports', '@angular/core', '@angular/common', 'rxjs', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.notifications = {}, global.ng.core, global.ng.common, global.rxjs, global.ng.forms));
})(this, (function (exports, i0, i1, rxjs, forms) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    var NotificationType;
    (function (NotificationType) {
        NotificationType["Success"] = "success";
        NotificationType["Error"] = "error";
        NotificationType["Alert"] = "alert";
        NotificationType["Info"] = "info";
        NotificationType["Warn"] = "warn";
    })(NotificationType || (NotificationType = {}));

    var NotificationComponent = /** @class */ (function () {
        function NotificationComponent() {
            this.title = 'Title';
            this.type = NotificationType.Success;
        }
        NotificationComponent.prototype.ngOnInit = function () {
            var Notification = document.getElementById("notification");
            Notification.style.transform = "translateX(150%)";
            Notification.classList.remove("hidden");
            setTimeout(function () {
                Notification.style.transform = "translateX(0%)";
            }, 200);
        };
        NotificationComponent.prototype.closeModal = function () {
            var Notification = document.getElementById("notification");
            Notification.style.transform = "translateX(150%)";
        };
        return NotificationComponent;
    }());
    NotificationComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NotificationComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    NotificationComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: NotificationComponent, selector: "notification", inputs: { title: "title", type: "type" }, ngImport: i0__namespace, template: "<div role=\"alert\" class=\"sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 xl:w-5/12 mx-auto absolute left-0 sm:left-auto right-0 sm:top-0 sm:w-6/12 md:w-3/5 justify-between w-11/12 bg-white dark:bg-gray-800 shadow-lg rounded flex sm:flex-row flex-col transition duration-150 ease-in-out\" id=\"notification\">\n    <div class=\"sm:px-6 p-2 flex mt-4 sm:mt-0 ml-4 sm:ml-0 items-center justify-center sm:rounded-tl sm:rounded-bl w-12 h-12 sm:h-auto sm:w-auto text-white\" [ngClass]=\"{'bg-red-400': (type == 'alert'), 'bg-green-400': (type == 'success')}\">\n        <button class=\"w-8 h-8 focus:outline-none\">\n          <!-- <icons class=\"w-8 h-8 stroke-1 stroke-current\" name=\"menu-off\"></icons> -->\n        </button>\n    </div>\n    <div class=\"flex flex-col justify-center xl:-ml-4 pl-4 xl:pl-1 sm:w-3/5 pt-4 sm:pb-4 pb-2\">\n        <p class=\"text-lg text-gray-800 dark:text-gray-100 font-semibold pb-1\">{{ title }}</p>\n        <p class=\"text-sm text-gray-600 dark:text-gray-400 font-normal\">You have {{ type }}successfully completed the survey. You will soon receive a reward email. Stay tuned.</p>\n    </div>\n    <div class=\"flex sm:flex-col sm:justify-center sm:border-l dark:border-gray-700 items-center border-gray-300 sm:w-1/6 pl-4 sm:pl-0\">\n        <div class=\"sm:pt-4 pb-4 sm:border-b dark:border-gray-700 border-gray-300 sm:w-full flex sm:justify-center\">\n            <span class=\"sm:text-sm text-xs text-green-400 font-bold mr-4 sm:mr-0 cursor-pointer\">View</span>\n        </div>\n        <div class=\"sm:pt-4 pb-4 flex sm:justify-center w-full cursor-pointer\" (click)=\"closeModal()\">\n            <span class=\"sm:text-sm text-xs text-gray-600 dark:text-gray-400 cursor-pointer\">Dismiss</span>\n        </div>\n    </div>\n</div>", styles: [""], directives: [{ type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NotificationComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'notification',
                        templateUrl: './notification.component.html',
                        styleUrls: ['./notification.component.css']
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }] } });

    var NotificationsService = /** @class */ (function () {
        function NotificationsService() {
            // https://jasonwatmore.com/post/2019/07/05/angular-8-alert-toaster-notifications
            this.subject = new rxjs.Subject();
        }
        NotificationsService.prototype.onAlert = function () {
            return this.subject.asObservable();
        };
        NotificationsService.prototype.alert = function (notification) {
            this.subject.next(notification);
        };
        return NotificationsService;
    }());
    NotificationsService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NotificationsService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    NotificationsService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NotificationsService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NotificationsService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var NotificationsContainerComponent = /** @class */ (function () {
        function NotificationsContainerComponent(componentFactoryResolver, _NotificationsService) {
            this.componentFactoryResolver = componentFactoryResolver;
            this._NotificationsService = _NotificationsService;
            this.componentClass = NotificationComponent;
            this.components = [];
        }
        NotificationsContainerComponent.prototype.ngOnInit = function () {
            this._NotificationsService.onAlert().subscribe(function (data) { return console.log(data); });
        };
        NotificationsContainerComponent.prototype.addNotification = function (notification) {
            // Create component dynamically inside the ng-template
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentClass);
            var componentRef = this.notifications.createComponent(componentFactory);
            componentRef.instance.title = notification.title;
            // componentRef.instance.type = notification.type
            // Push the component so that we can keep track of which components are created
            this.components.push(componentRef);
        };
        NotificationsContainerComponent.prototype.removeNotification = function () {
            var _this = this;
            // Find the component
            var component = this.components.find(function (component) { return component.instance instanceof _this.componentClass; });
            var componentIndex = this.components.indexOf(component);
            if (componentIndex !== -1) {
                // Remove component from both view and array
                this.notifications.remove(this.components.length - 1);
                this.components.splice(componentIndex, 1);
            }
        };
        return NotificationsContainerComponent;
    }());
    NotificationsContainerComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NotificationsContainerComponent, deps: [{ token: i0__namespace.ComponentFactoryResolver }, { token: NotificationsService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    NotificationsContainerComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: NotificationsContainerComponent, selector: "notifications-container", viewQueries: [{ propertyName: "notifications", first: true, predicate: ["notifications"], descendants: true, read: i0.ViewContainerRef }], ngImport: i0__namespace, template: "<p>notifications-container works!</p>\n<button (click)=\"addNotification({ content: '', title: 'Titel' })\">ADD</button>\n<br>\n<button (click)=\"addNotification({ content: '', title: 'Titel' })\">ADD_Danger</button>\n<br>\n<button (click)=\"removeNotification()\">REMOVE</button>\n<ng-template #notifications>\n\n</ng-template>", styles: [""] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NotificationsContainerComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'notifications-container',
                        templateUrl: './notifications-container.component.html',
                        styleUrls: ['./notifications-container.component.css']
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.ComponentFactoryResolver }, { type: NotificationsService }]; }, propDecorators: { notifications: [{
                    type: i0.ViewChild,
                    args: ['notifications', { read: i0.ViewContainerRef }]
                }] } });

    var NotificationsModule = /** @class */ (function () {
        function NotificationsModule() {
        }
        return NotificationsModule;
    }());
    NotificationsModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NotificationsModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    NotificationsModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NotificationsModule, declarations: [NotificationsContainerComponent,
            NotificationComponent], imports: [i1.CommonModule,
            forms.FormsModule,
            forms.ReactiveFormsModule], exports: [NotificationsContainerComponent] });
    NotificationsModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NotificationsModule, providers: [
            NotificationsService
        ], imports: [[
                i1.CommonModule,
                forms.FormsModule,
                forms.ReactiveFormsModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: NotificationsModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            NotificationsContainerComponent,
                            NotificationComponent
                        ],
                        imports: [
                            i1.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule
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

    exports.NotificationComponent = NotificationComponent;
    exports.NotificationsContainerComponent = NotificationsContainerComponent;
    exports.NotificationsModule = NotificationsModule;
    exports.NotificationsService = NotificationsService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=notifications.umd.js.map
