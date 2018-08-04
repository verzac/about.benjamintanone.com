import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { AboutmeComponent } from './aboutme/aboutme.component';
export const router: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutmeComponent }
];

export const AppRoutesModule: ModuleWithProviders = RouterModule.forRoot(router);