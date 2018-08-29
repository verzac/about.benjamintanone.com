import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { config } from '../config/config'
import { Observable } from "rxjs";
import { Portfolio } from "../interface/portfolio.interface";

@Injectable(
    {providedIn: 'root'}
)
export class PortfolioService {
    portfolioUrl: string = config.portfolioUrl;
    constructor(private http: HttpClient) {
        
    }

    getPortfolioData(): Observable<any> {
        let output: Portfolio[] = [];
        return this.http.get(this.portfolioUrl);
    }
}