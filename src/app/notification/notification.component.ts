import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../common/service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notificationString: string;
  timer: NodeJS.Timer;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.listen((currentNotification: string) => {
      this.setNotificationString(currentNotification);
    });
  }

  setNotificationString(notification: string) {
    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.notificationString = notification;
    this.timer = setTimeout(() => {
      this.notificationString = null;
    }, 5000);
  }

}
