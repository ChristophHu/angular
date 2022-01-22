import { Injectable } from '@angular/core';
// import { NotificationType } from './model/notification-type.enum'
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class NotificationsService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbm90aWZpY2F0aW9ucy9zcmMvbGliL25vdGlmaWNhdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRTFDLG9FQUFvRTtBQUNwRSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUszQyxNQUFNLE9BQU8sb0JBQW9CO0lBSS9CO1FBSEEsaUZBQWlGO1FBQ3pFLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBZ0IsQ0FBQTtJQUU3QixDQUFDO0lBRWpCLE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDcEMsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUEwQjtRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNqQyxDQUFDOztpSEFaVSxvQkFBb0I7cUhBQXBCLG9CQUFvQixjQUZuQixNQUFNOzJGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4vbW9kZWwvbm90aWZpY2F0aW9uLm1vZGVsJ1xuLy8gaW1wb3J0IHsgTm90aWZpY2F0aW9uVHlwZSB9IGZyb20gJy4vbW9kZWwvbm90aWZpY2F0aW9uLXR5cGUuZW51bSdcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uc1NlcnZpY2Uge1xuICAvLyBodHRwczovL2phc29ud2F0bW9yZS5jb20vcG9zdC8yMDE5LzA3LzA1L2FuZ3VsYXItOC1hbGVydC10b2FzdGVyLW5vdGlmaWNhdGlvbnNcbiAgcHJpdmF0ZSBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8Tm90aWZpY2F0aW9uPigpXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBvbkFsZXJ0KCk6IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdC5hc09ic2VydmFibGUoKVxuICB9XG5cbiAgYWxlcnQobm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pIHtcbiAgICB0aGlzLnN1YmplY3QubmV4dChub3RpZmljYXRpb24pXG4gIH1cblxuICAvLyBzZXQobm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pOiBOb3RpZmljYXRpb24ge1xuICAvLyAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIG9wdGlvbnNcbiAgLy8gICB0aGlzLmFkZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pXG4gIC8vICAgcmV0dXJuIG5vdGlmaWNhdGlvbjtcbiAgLy8gfVxuXG4gIC8vIHN1Y2Nlc3ModGl0bGU6IHN0cmluZyA9ICcnLCBjb250ZW50OiBzdHJpbmcgPSAnJywgdHlwZTogTm90aWZpY2F0aW9uVHlwZSApOiBOb3RpZmljYXRpb24ge1xuICAvLyAgIHJldHVybiB0aGlzLnNldCh7IHRpdGxlOiB0aXRsZSwgY29udGVudDogY29udGVudCwgdHlwZTogdHlwZSA9IE5vdGlmaWNhdGlvblR5cGUuU3VjY2VzcyB9KTtcbiAgLy8gfVxuXG4gIC8vIGFkZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb246IE5vdGlmaWNhdGlvbikge1xuXG4gIC8vIH1cblxuICAvLyBpbnNlcnQobm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAvLyAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSAoKG9ic2VydmVyKSA9PiB7XG4gIC8vICAgICAgIGNvbnN0IHNvdXJjZSQgPSB0aGlzLnNldChub3RpZmljYXRpb24pXG4gIC8vICAgICAgIHNvdXJjZSQuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgLy8gICAgICAgICAgIG9ic2VydmVyLm5leHQoZGF0YS5pZClcbiAgLy8gICAgICAgfSksIChlcnJvcjogYW55KSA9PiBvYnNlcnZlci5lcnJvcihlcnJvcilcbiAgLy8gICB9KVxuICAvLyB9XG59XG4iXX0=