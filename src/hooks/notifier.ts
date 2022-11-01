import { NotificationType } from "@/interfaces/INotification";
import { store } from "@/store";

type Notifier  = {
    notify: (type: NotificationType, message: string, title?: string, timeout?: number) => void;
    success: (message: string, title?: string, timeout?: number) => void;
    error: (message: string, title?: string, timeout?: number) => void;
    info: (message: string, title?: string, timeout?: number) => void;
    warning: (message: string, title?: string, timeout?: number) => void;
}

export default () : Notifier => {
    const notify = (type: NotificationType, message: string, title?: string, timeout?: number) => {
        store.dispatch("addNotification", { type, title, message, timeout });
    };

    const success = (message: string, title?: string, timeout?: number) => {
        title = title || "Success";
        timeout = timeout || 3000;
        notify(NotificationType.SUCCESS, message, title, timeout);
    };

    const error = (message: string, title?: string, timeout?: number) => {
        title = title || "Error";
        timeout = timeout || 5000;
        notify(NotificationType.ERROR, message, title, timeout);
    };

    const info = (message: string, title?: string, timeout?: number) => {
        title = title || "Info";
        timeout = timeout || 3000;
        notify(NotificationType.INFO, message, title, timeout);
    };

    const warning = (message: string, title?: string, timeout?: number) => {
        title = title || "Warning";
        timeout = timeout || 3000;
        notify(NotificationType.WARNING, message, title, timeout);
    };

    return {
        notify,
        success,
        error,
        info,
        warning,
    }
}
