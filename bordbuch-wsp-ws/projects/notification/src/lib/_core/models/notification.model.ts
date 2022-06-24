import { Observable } from 'rxjs';

export type NotificationPosition = 'left' | 'center' | 'right';

export interface GlobalNotificationConfig {
  // width: string;
  position: NotificationPosition;
  // contentColor: string;
  // iconColor: string;
  // headerColor: string;
}

export type NotificationConfig = Omit<GlobalNotificationConfig, 'position'> & {
  headerText: string;
  data: any;
};

export type NotificationBundle = NotificationConfig &
  Pick<GlobalNotificationConfig, 'position'> & {
    content: string;
    mapKey: number;
  };

export interface NotificationHandler {
  onClose: () => Observable<any>;
}
