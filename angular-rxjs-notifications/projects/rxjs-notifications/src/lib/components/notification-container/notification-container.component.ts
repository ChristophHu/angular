import { AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { RxjsNotificationsService } from '../../service/rxjs-notifications.service';
import { NotificationComponent } from './notification/notification.component';
import { Notification } from './../../model/notification.model'

@Component({
  selector: 'lib-notification-container',
  templateUrl: './notification-container.component.html',
  styleUrls: ['./notification-container.component.css']
})
export class NotificationContainerComponent implements AfterViewInit {
  @ViewChild('notifications', {read: ViewContainerRef}) notifications!: ViewContainerRef
  
  constructor(private _ComponentFactoryResolver: ComponentFactoryResolver, private _RxjsNotificationsService: RxjsNotificationsService) { }

  ngAfterViewInit(): void {
    this._RxjsNotificationsService.notifications.subscribe((notifications: Notification[]) => {
      notifications.forEach(notification => this.addNotification(notification))
    })
  }

  addNotification(notification: Notification) {
    const componentFactory = this._ComponentFactoryResolver.resolveComponentFactory(NotificationComponent)
    const componentRef = this.notifications.createComponent(componentFactory)
    componentRef.instance.notification = notification
    // componentRef.instance.id = notification.id!
    // componentRef.instance.title = notification.title
    // componentRef.instance.type = notification.type!
    // componentRef.instance.type = notification.type
    // Push the component so that we can keep track of which components are created
    // this.components.push(componentRef)
  }

}
