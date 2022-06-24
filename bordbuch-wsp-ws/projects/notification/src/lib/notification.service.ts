import { Injectable, ComponentRef, Injector, ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Optional, Inject } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';
import { NotificationComponent } from './notification.component';
import { NotificationConfig, NotificationHandler, NotificationBundle, GlobalNotificationConfig } from './_core/models/notification.model';
import { AbstractCentralNotification } from './_core/abstracts/toast.abstract';
import { USER_TOAST_CONFIG, DEFAULT_TOAST_CONFIG } from './_core/configs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends AbstractCentralNotification {
  private mapOfSources: Map<number, Subject<any>> = new Map<number, Subject<any>>();
  private toastComponentRef: ComponentRef<NotificationComponent> | null;
  private onCloseSub: Subscription;
  private globalConfig: GlobalNotificationConfig | null;

  constructor(
    private injector: Injector,
    private appRef: ApplicationRef,
    private compFactoryResolver: ComponentFactoryResolver,
    @Optional() @Inject(USER_TOAST_CONFIG) NotificationConfig: GlobalNotificationConfig
  ) {
    super();

    this.toastComponentRef = null;
    this.globalConfig = NotificationConfig || null;
    this.onCloseSub = new Subscription();
  }

  /**
   * Shows toast with specified content
   * @param config Configuration options for the toast
   * @returns Handlers and notification sources
   */
  open(content: string, config?: Partial<NotificationConfig>): Readonly<NotificationHandler> {
    const key = this.mapOfSources.size ? ++Array.from(this.mapOfSources)[this.mapOfSources.size - 1][0] : 0;
    const mergedConfig = this.mergeConfigs(config, this.globalConfig);

    const bundle = {
      content,
      mapKey: key,
      ...mergedConfig,
    } as NotificationBundle;

    this.activeNotifications ? this.appendElementToView(bundle) : this.appendViewToBody(bundle);

    this.mapOfSources.set(key, new Subject());

    const apiHandler = {
      onClose: () =>
        new Observable((observer) => {
          const subscription = this.mapOfSources.get(key)?.subscribe(
            (data: any) => {
              observer.next(data);
              observer.complete();
              this.mapOfSources.delete(key);
            },
            (err) => observer.error(err)
          );

          return () => subscription?.unsubscribe();
        }) as Observable<any>,
    };

    return Object.freeze(apiHandler);
  }

  private appendViewToBody(payload: NotificationBundle): void {
    const compFactory = this.compFactoryResolver.resolveComponentFactory(NotificationComponent);
    const compRef = compFactory.create(this.injector);

    compRef.instance.config = payload;
    compRef.hostView.detectChanges();

    this.appRef.attachView(compRef.hostView);

    const domEl = (compRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domEl);

    this.toastComponentRef = compRef;
    this.activeNotifications++;

    this.onCloseSub = this.toastComponentRef.instance.onClose.subscribe((toast: NotificationBundle) => {
      this.activeNotifications--;

      const toEmit = toast && toast.data ? toast.data : true;
      this.mapOfSources.get(toast.mapKey)?.next(toEmit);

      if (!this.activeNotifications) {
        this.removeViewFromBody();
        this.mapOfSources.clear();
        this.onCloseSub && this.onCloseSub.unsubscribe();
      }
    });
  }

  private removeViewFromBody(): void {
    if (this.toastComponentRef) {
      this.appRef.detachView(this.toastComponentRef.hostView);
      this.toastComponentRef.destroy();
      this.toastComponentRef = null;
    }
  }

  private appendElementToView(payload: NotificationBundle): void {
    if (this.toastComponentRef) {
      this.toastComponentRef.instance.pushDownElements();
      this.toastComponentRef.instance.addNewElement(payload);
      this.toastComponentRef.hostView.detectChanges();

      this.activeNotifications++;
    }
  }

  private mergeConfigs(
    localConfig: Partial<NotificationConfig> | undefined,
    globalConfig: GlobalNotificationConfig | null
  ): NotificationConfig | {} {
    return {
      ...DEFAULT_TOAST_CONFIG,
      ...(globalConfig && { ...globalConfig }),
      ...(localConfig && { ...localConfig }),
    };
  }
}
