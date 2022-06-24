import { NotificationComponent } from './notification.component';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractCentralNotification } from './_core/abstracts/toast.abstract';
import { NotificationService } from './notification.service';
import { GlobalNotificationConfig } from './_core/models/notification.model';
import { USER_TOAST_CONFIG } from './_core/configs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    NotificationComponent
  ],
  providers: [
    {
      provide: AbstractCentralNotification,
      useClass: NotificationService,
    },
  ]
})
export class NotificationModule {
  static forRoot(config: Partial<GlobalNotificationConfig>): ModuleWithProviders<NotificationModule> {
    return {
      ngModule: NotificationModule,
      providers: [
        {
          provide: USER_TOAST_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
