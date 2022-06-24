import { NotificationConfig, NotificationHandler } from '../models/notification.model';

export abstract class AbstractCentralNotification {
  protected activeNotifications = 0;

  abstract open(content: string, config?: Partial<NotificationConfig>): Readonly<NotificationHandler>;
}
