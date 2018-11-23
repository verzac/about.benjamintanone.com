import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutApiService } from '../common/service/about-api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { state } from '@angular/animations';
import { State } from '../common/enum/state.enum';
import { retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-contact-me-confirm',
  templateUrl: './contact-me-confirm.component.html',
  styleUrls: ['./contact-me-confirm.component.css']
})
export class ContactMeConfirmComponent implements OnInit {

  private state: State = State.PROCESSING;
  private errorStatus: number;
  constructor(private route: ActivatedRoute, private aboutApiService: AboutApiService) { }

  ngOnInit() {
    let challengeId: string = this.route.snapshot.paramMap.get('challengeId');
  }

  sendConfirmationChallenge(challengeId: string) {
    this.aboutApiService.submitContactMeFormConfirmation(challengeId).subscribe(() => {
      this.state = State.DONE;
    }, (error: HttpErrorResponse) => {
      this.state = State.ERROR;
      this.errorStatus = error.status;
      throw error;
    });
  }

}
