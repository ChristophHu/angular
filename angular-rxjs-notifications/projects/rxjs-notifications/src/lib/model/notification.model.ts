export enum NotificationType {
    Success = 'success',
    Error = 'error',
    Alert = 'alert',
    Info = 'info',
    Warn = 'warn'
}

export interface Notification {
    id      : string
    content : string
    date    : Date
    title   : string
    type?   : NotificationType
}