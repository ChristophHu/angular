import { InjectionToken } from '@angular/core';
import { GlobalNotificationConfig } from '../models/notification.model';

export const DEFAULT_TOAST_CONFIG: GlobalNotificationConfig = {
  // width: '350px',
  position: 'right',
  // headerColor: '#000',
  // iconColor: '#5F95E1',
  // contentColor: '#777777',
};

export const USER_TOAST_CONFIG = new InjectionToken<GlobalNotificationConfig>('User Toast Config');
