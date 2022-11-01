export enum NotificationType {
    SUCCESS = "success",
    ERROR = "error",
    INFO = "info",
    WARNING = "warning",
}

export default interface INotification {
    id: number;
    type: NotificationType;
    title: string;
    message: string;
    timeout: number;
}