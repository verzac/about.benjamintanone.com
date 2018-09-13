import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Portfolio } from "../interface/portfolio.interface";
import { environment } from '../../../environments/environment';

@Injectable(
    {providedIn: 'root'}
)
export class PortfolioService {
    portfolioUrl: string = environment.portfolioUrl;
    constructor(private http: HttpClient) {
        
    }

    getPortfolioData(): Observable<any> {
        let output: Portfolio[] = [];
        return this.http.get(this.portfolioUrl);
    }
}