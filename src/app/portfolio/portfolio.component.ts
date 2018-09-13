import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../common/service/portfolio.service';
import { Portfolio } from '../common/interface/portfolio.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolios: Portfolio[];
  hasErred: boolean = false;
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.getPortfolios();
  }

  getPortfolios() {
    this.portfolioService.getPortfolioData().subscribe(
      (data: Portfolio[]) => {
        if (data) {
          this.portfolios = data;
        } else {
          this.hasErred = true;
          console.error('500: Data is not in expected format!')
        }
      }, (error: HttpErrorResponse) => {
        this.hasErred = true;
        if (error.error instanceof ErrorEvent) {
          console.error('Client-side error:', error.message);
        } else {
          console.error('${error.status}: ${error.message}');
        }
      });
  }
}
