import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ContactMeConfirmComponent } from './contact-me-confirm/contact-me-confirm.component';
export const router: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutmeComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contact-me', children: [
        { path: '', component: ContactMeComponent},
        { path: 'confirm/:challengeId', component: ContactMeConfirmComponent }
    ] },
    { path: '404', component: NotfoundComponent}, // 404 page
    { path: '**', redirectTo: '404'}
];

export const AppRoutesModule: ModuleWithProviders = RouterModule.forRoot(router);