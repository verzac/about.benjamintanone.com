import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutesModule } from './app.routes';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutmeComponent,
    PortfolioComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutesModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
