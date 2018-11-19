import { Component, OnInit } from '@angular/core';
import { NotificationService } from './common/service/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notificationString: string;
  timer: NodeJS.Timer;
  title = 'app';
  constructor(private notificationService: NotificationService) {}

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
