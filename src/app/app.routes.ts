import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
export const router: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent}
];

export const AppRoutesModule: ModuleWithProviders = RouterModule.forRoot(router);