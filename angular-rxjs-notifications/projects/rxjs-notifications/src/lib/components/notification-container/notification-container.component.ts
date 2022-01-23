import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
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
    this._RxjsNotificationsService.notifications$.subscribe((notifications: Notification[]) => {
      notifications.forEach(notification => this.addNotification(notification))
    })
  }

  addNotification(notification: Notification) {
    const componentFactory = this._ComponentFactoryResolver.resolveComponentFactory(NotificationComponent)
    const componentRef = this.notifications.createComponent(componentFactory)
    componentRef.instance.notification = notification
    componentRef.instance.destroy.subscribe(() => {
      componentRef.destroy()
    })
  }

  closeNotification(id: string) {
    const componentRef = this.notifications
  }

  // destroy() {
    
  // }
}
