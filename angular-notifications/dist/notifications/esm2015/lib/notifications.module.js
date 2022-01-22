import { NgModule } from '@angular/core';
import { NotificationsContainerComponent } from './notifications-container/notifications-container.component';
import { NotificationComponent } from './notification/notification.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationsService } from './notifications.service';
import * as i0 from "@angular/core";
export class NotificationsModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3RpZmljYXRpb25zL3NyYy9saWIvbm90aWZpY2F0aW9ucy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUM5RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQWtCL0QsTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtpSEFBbkIsbUJBQW1CLGlCQWQ1QiwrQkFBK0I7UUFDL0IscUJBQXFCLGFBR3JCLFlBQVk7UUFDWixXQUFXO1FBQ1gsbUJBQW1CLGFBR25CLCtCQUErQjtpSEFLdEIsbUJBQW1CLGFBSmpCO1FBQ1gsb0JBQW9CO0tBQ3JCLFlBVFE7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtTQUNwQjsyRkFPVSxtQkFBbUI7a0JBaEIvQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWiwrQkFBK0I7d0JBQy9CLHFCQUFxQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCwrQkFBK0I7cUJBQ2hDLEVBQUMsU0FBUyxFQUFFO3dCQUNYLG9CQUFvQjtxQkFDckI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uc0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbm90aWZpY2F0aW9ucy1jb250YWluZXIvbm90aWZpY2F0aW9ucy1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICcuL25vdGlmaWNhdGlvbnMuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5vdGlmaWNhdGlvbnNDb250YWluZXJDb21wb25lbnQsXG4gICAgTm90aWZpY2F0aW9uQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTm90aWZpY2F0aW9uc0NvbnRhaW5lckNvbXBvbmVudFxuICBdLHByb3ZpZGVyczogW1xuICAgIE5vdGlmaWNhdGlvbnNTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uc01vZHVsZSB7IH1cbiJdfQ==