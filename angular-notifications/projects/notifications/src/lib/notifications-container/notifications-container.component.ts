import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { NotificationComponent } from '../notification/notification.component'
import { Notification } from '../model/notification.model'
import { NotificationsService } from '../notifications.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'notifications-container',
  templateUrl: './notifications-container.component.html',
  styleUrls: ['./notifications-container.component.css']
})
export class NotificationsContainerComponent implements OnInit {
  @ViewChild('notifications', {read: ViewContainerRef}) notifications!: ViewContainerRef

  componentClass = NotificationComponent
  components: any[] = []

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private _NotificationsService: NotificationsService) {}

  ngOnInit(): void {
    this._NotificationsService.onAlert().subscribe(notification => {
      this.addNotification(notification)
      console.log(notification)
    })
  }

  addNotification(notification: Notification) {
    // Create component dynamically inside the ng-template
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentClass)
    const componentRef = this.notifications.createComponent(componentFactory)
    componentRef.instance.title = notification.title
    // componentRef.instance.type = notification.type
    // Push the component so that we can keep track of which components are created
    this.components.push(componentRef)
  }

  removeNotification() {
    // Find the component
    const component = this.components.find((component: any) => component.instance instanceof this.componentClass)
    const componentIndex = this.components.indexOf(component)

    if (componentIndex !== -1) {
      // Remove component from both view and array
      this.notifications.remove(this.components.length-1)
      this.components.splice(componentIndex, 1)
    }
  }

  response(id: string) {
    this._NotificationsService.response(id)
  }

}
