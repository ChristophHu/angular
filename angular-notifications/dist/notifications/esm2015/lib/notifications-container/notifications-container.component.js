import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import * as i0 from "@angular/core";
import * as i1 from "../notifications.service";
export class NotificationsContainerComponent {
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
NotificationsContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NotificationsContainerComponent, deps: [{ token: i0.ComponentFactoryResolver }, { token: i1.NotificationsService }], target: i0.ɵɵFactoryTarget.Component });
NotificationsContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: NotificationsContainerComponent, selector: "notifications-container", viewQueries: [{ propertyName: "notifications", first: true, predicate: ["notifications"], descendants: true, read: ViewContainerRef }], ngImport: i0, template: "<p>notifications-container works!</p>\n<button (click)=\"addNotification({ content: '', title: 'Titel' })\">ADD</button>\n<br>\n<button (click)=\"addNotification({ content: '', title: 'Titel' })\">ADD_Danger</button>\n<br>\n<button (click)=\"removeNotification()\">REMOVE</button>\n<ng-template #notifications>\n\n</ng-template>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: NotificationsContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'notifications-container',
                    templateUrl: './notifications-container.component.html',
                    styleUrls: ['./notifications-container.component.css']
                }]
        }], ctorParameters: function () { return [{ type: i0.ComponentFactoryResolver }, { type: i1.NotificationsService }]; }, propDecorators: { notifications: [{
                type: ViewChild,
                args: ['notifications', { read: ViewContainerRef }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbm90aWZpY2F0aW9ucy9zcmMvbGliL25vdGlmaWNhdGlvbnMtY29udGFpbmVyL25vdGlmaWNhdGlvbnMtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25vdGlmaWNhdGlvbnMvc3JjL2xpYi9ub3RpZmljYXRpb25zLWNvbnRhaW5lci9ub3RpZmljYXRpb25zLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFDeEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUE7OztBQVU5RSxNQUFNLE9BQU8sK0JBQStCO0lBTTFDLFlBQW9CLHdCQUFrRCxFQUFVLHFCQUEyQztRQUF2Ryw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQVUsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFzQjtRQUgzSCxtQkFBYyxHQUFHLHFCQUFxQixDQUFBO1FBQ3RDLGVBQVUsR0FBVSxFQUFFLENBQUE7SUFFd0csQ0FBQztJQUUvSCxRQUFRO1FBQ04sSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBRUQsZUFBZSxDQUFDLFlBQTBCO1FBQ3hDLHNEQUFzRDtRQUN0RCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDbkcsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUN6RSxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFBO1FBQ2hELGlEQUFpRDtRQUNqRCwrRUFBK0U7UUFDL0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDcEMsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixxQkFBcUI7UUFDckIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFjLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLFlBQVksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQzdHLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRXpELElBQUksY0FBYyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3pCLDRDQUE0QztZQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUE7U0FDMUM7SUFDSCxDQUFDOzs0SEFoQ1UsK0JBQStCO2dIQUEvQiwrQkFBK0IsMEpBQ1AsZ0JBQWdCLDZCQ1pyRCwwVUFRYzsyRkRHRCwrQkFBK0I7a0JBTDNDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsV0FBVyxFQUFFLDBDQUEwQztvQkFDdkQsU0FBUyxFQUFFLENBQUMseUNBQXlDLENBQUM7aUJBQ3ZEO2tKQUV1RCxhQUFhO3NCQUFsRSxTQUFTO3VCQUFDLGVBQWUsRUFBRSxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudCdcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL21vZGVsL25vdGlmaWNhdGlvbi5tb2RlbCdcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vbm90aWZpY2F0aW9ucy5zZXJ2aWNlJ1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdGlmaWNhdGlvbnMtY29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25vdGlmaWNhdGlvbnMtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbm90aWZpY2F0aW9ucy1jb250YWluZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnNDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdub3RpZmljYXRpb25zJywge3JlYWQ6IFZpZXdDb250YWluZXJSZWZ9KSBub3RpZmljYXRpb25zITogVmlld0NvbnRhaW5lclJlZlxuXG4gIGNvbXBvbmVudENsYXNzID0gTm90aWZpY2F0aW9uQ29tcG9uZW50XG4gIGNvbXBvbmVudHM6IGFueVtdID0gW11cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBwcml2YXRlIF9Ob3RpZmljYXRpb25zU2VydmljZTogTm90aWZpY2F0aW9uc1NlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fTm90aWZpY2F0aW9uc1NlcnZpY2Uub25BbGVydCgpLnN1YnNjcmliZShkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuICB9XG5cbiAgYWRkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKSB7XG4gICAgLy8gQ3JlYXRlIGNvbXBvbmVudCBkeW5hbWljYWxseSBpbnNpZGUgdGhlIG5nLXRlbXBsYXRlXG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY29tcG9uZW50Q2xhc3MpXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5ub3RpZmljYXRpb25zLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KVxuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS50aXRsZSA9IG5vdGlmaWNhdGlvbi50aXRsZVxuICAgIC8vIGNvbXBvbmVudFJlZi5pbnN0YW5jZS50eXBlID0gbm90aWZpY2F0aW9uLnR5cGVcbiAgICAvLyBQdXNoIHRoZSBjb21wb25lbnQgc28gdGhhdCB3ZSBjYW4ga2VlcCB0cmFjayBvZiB3aGljaCBjb21wb25lbnRzIGFyZSBjcmVhdGVkXG4gICAgdGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50UmVmKVxuICB9XG5cbiAgcmVtb3ZlTm90aWZpY2F0aW9uKCkge1xuICAgIC8vIEZpbmQgdGhlIGNvbXBvbmVudFxuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50cy5maW5kKChjb21wb25lbnQ6IGFueSkgPT4gY29tcG9uZW50Lmluc3RhbmNlIGluc3RhbmNlb2YgdGhpcy5jb21wb25lbnRDbGFzcylcbiAgICBjb25zdCBjb21wb25lbnRJbmRleCA9IHRoaXMuY29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudClcblxuICAgIGlmIChjb21wb25lbnRJbmRleCAhPT0gLTEpIHtcbiAgICAgIC8vIFJlbW92ZSBjb21wb25lbnQgZnJvbSBib3RoIHZpZXcgYW5kIGFycmF5XG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbnMucmVtb3ZlKHRoaXMuY29tcG9uZW50cy5sZW5ndGgtMSlcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoY29tcG9uZW50SW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbn1cbiIsIjxwPm5vdGlmaWNhdGlvbnMtY29udGFpbmVyIHdvcmtzITwvcD5cbjxidXR0b24gKGNsaWNrKT1cImFkZE5vdGlmaWNhdGlvbih7IGNvbnRlbnQ6ICcnLCB0aXRsZTogJ1RpdGVsJyB9KVwiPkFERDwvYnV0dG9uPlxuPGJyPlxuPGJ1dHRvbiAoY2xpY2spPVwiYWRkTm90aWZpY2F0aW9uKHsgY29udGVudDogJycsIHRpdGxlOiAnVGl0ZWwnIH0pXCI+QUREX0RhbmdlcjwvYnV0dG9uPlxuPGJyPlxuPGJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlTm90aWZpY2F0aW9uKClcIj5SRU1PVkU8L2J1dHRvbj5cbjxuZy10ZW1wbGF0ZSAjbm90aWZpY2F0aW9ucz5cblxuPC9uZy10ZW1wbGF0ZT4iXX0=