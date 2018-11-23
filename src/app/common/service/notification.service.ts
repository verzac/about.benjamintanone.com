import { Injectable } from "@angular/core";
import { Observable, observable } from "rxjs";
@Injectable(
    {providedIn: 'root'}
)
export class NotificationService {
    private currentNotification: string;
    private listenerCallback: (currentNotification: string) => void;

    listen(callback: (currentNotification: string) => void): void {
        if (this.listenerCallback) {
            throw new Error('TRYING TO ASSIGN MULTIPLE CALLBACKS FOR NOTIFICATIONS');
        }
        this.listenerCallback = callback;
    }

    setNotification(msg: string): void {
        if (this.listenerCallback) {
            this.listenerCallback(msg);
        } else {
            console.debug('MISSING LISTENER CALLBACK FOR NOTIFICATION SERVICE');
        }
    }
}