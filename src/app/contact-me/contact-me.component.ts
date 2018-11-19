import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactMeForm } from './contact-me-form.interface';
import { AboutApiService } from '../common/service/about-api.service';
import { NotificationService } from '../common/service/notification.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  constructor(private aboutApiService: AboutApiService, private notificationService: NotificationService) { }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
    reason: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(50)])
  });

  ngOnInit() {
  }

  get email() {
    return this.form.get('email');
  }

  get message() {
    return this.form.get('message');
  }

  get reason() {
    return this.form.get('reason');
  }
  
  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }

  onSubmit(contactMeForm: ContactMeForm): void {
    this.aboutApiService.submitContactMeForm(contactMeForm)
    .subscribe(() => {
      this.notificationService.setNotification('Please check your e-mail to confirm submission.');
    }, (error: HttpErrorResponse) => {
      throw error;
    });
  }
}
