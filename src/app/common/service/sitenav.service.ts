import { Injectable } from "@angular/core";

@Injectable(
    {providedIn: 'root'}
)
export class SiteNavService {
    getNavItems(): NavItems[] {
        // TODO: call an API to make it dynamic
        let output: NavItems[] = [
            {href: '/home', name: 'home'},
            {href: '/about', name: 'about me'},
            {href: '/portfolio', name: 'portfolio' }
        ]; 
        return output;
    }
}