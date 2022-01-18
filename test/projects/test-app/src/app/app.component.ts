import { Component, ComponentFactoryResolver, Type, ViewChild, ViewContainerRef } from '@angular/core'
import { NotificationsComponent } from 'notifications'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @ViewChild('notification', {read: ViewContainerRef}) notification!: ViewContainerRef

  public test: string = 'T'

  components: any = []

  draggableComponentClass = NotificationsComponent

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  addNotification(componentClass: Type<any>) {
    // Create component dynamically inside the ng-template
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass)
    const component = this.notification.createComponent(componentFactory)

    // Push the component so that we can keep track of which components are created
    this.components.push(component)
  }

  removeNotification(componentClass: Type<any>) {
    // Find the component
    const component = this.components.find((component: any) => component.instance instanceof componentClass);
    const componentIndex = this.components.indexOf(component);

    if (componentIndex !== -1) {
      // Remove component from both view and array
      // this.notification.remove(this.notification.indexOf(component));
      this.notification.remove(componentIndex)
      this.components.splice(componentIndex, 1);
    }
  }

  destroyed(e: string) {
    console.log(e)
  }
}
