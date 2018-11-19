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
    aboutApiUrl: string = environment.aboutApiUrl;
    contactMeUrl: string = this.aboutApiUrl + '/contact';
    constructor(private http: HttpClient) {
        
    }

    submitContactMeForm(form: ContactMeForm): Observable<any> {
        let output: Portfolio[] = [];
        return this.http.post(this.contactMeUrl, form);
    }
}