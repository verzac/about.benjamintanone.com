import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Portfolio } from "../interface/portfolio.interface";
import { environment } from '../../../environments/environment';
import { ContactMeForm } from "../../contact-me/contact-me-form.interface";

@Injectable(
    {providedIn: 'root'}
)
export class AboutApiService {
    private aboutApiUrl: string = environment.aboutApiUrl;
    private contactMeUrl: string = this.aboutApiUrl + '/contact';
    private confirmContactMeUrl: string = this.aboutApiUrl + '/contact/confirm';

    constructor(private http: HttpClient) {
        
    }

    submitContactMeForm(form: ContactMeForm): Observable<any> {
        let output: Portfolio[] = [];
        return this.http.post(this.contactMeUrl, form);
    }

    submitContactMeFormConfirmation(confirmationChallenge: string): Observable<any> {
        return this.http.post(this.confirmContactMeUrl, {challenge: confirmationChallenge});
    }
}