export enum NotificationType {
    Success = 'success',
    Error = 'error',
    Alert = 'alert',
    Info = 'info',
    Warn = 'warn'
}

export interface Notification {
    id?         : string
    content     : string
    date?       : Date
    response?   : null | boolean | Object
    title       : string
    type?       : NotificationType
}