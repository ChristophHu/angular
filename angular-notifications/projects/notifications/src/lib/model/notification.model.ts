import { NotificationType } from "./notification-type.enum";

export interface Notification {
    content : string
    title   : string
    type?   : NotificationType
}