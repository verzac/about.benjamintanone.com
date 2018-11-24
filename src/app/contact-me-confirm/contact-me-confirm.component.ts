import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutApiService } from '../common/service/about-api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { state } from '@angular/animations';
import { retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-contact-me-confirm',
  templateUrl: './contact-me-confirm.component.html',
  styleUrls: ['./contact-me-confirm.component.css']
})
export class ContactMeConfirmComponent implements OnInit {

  busy = true;
  error: HttpErrorResponse;
  constructor(private route: ActivatedRoute, private aboutApiService: AboutApiService) { }

  ngOnInit() {
    let challengeId: string = this.route.snapshot.paramMap.get('challengeId');
    this.sendConfirmationChallenge(challengeId);
  }

  sendConfirmationChallenge(challengeId: string) {
    this.aboutApiService.submitContactMeFormConfirmation(challengeId).subscribe(() => {
      this.busy = false;
      console.log("Successfully submitted contact form.")
    }, (error: HttpErrorResponse) => {
      this.error = error;
      this.busy = false;
      throw error;
    });
  }

}
