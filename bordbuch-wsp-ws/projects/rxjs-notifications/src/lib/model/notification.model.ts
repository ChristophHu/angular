export enum NotificationType {
    Success = 'success',
    Error = 'error',
    Alert = 'alert',
    Info = 'info',
    Warn = 'warn',
    Delete = 'delete'
}
export enum ExceptionType {
    OK          = 'ok',
    YesNo       = 'yesno',
    Response    = 'response'
}

export interface Notification {
    id?         : string
    content     : string
    date?       : Date
    title       : string
    type?       : NotificationType
    exception   : ExceptionType
}