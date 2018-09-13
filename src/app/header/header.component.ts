import { Component, OnInit } from '@angular/core';
import { 
  trigger,
  state,
  style,
  animate,
  transition
 } from '@angular/animations';
import { SiteNavService } from '../common/service/sitenav.service';
import { Router, NavigationEnd } from '@angular/router';
import { NavItems } from '../common/interface/nav_items.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('collapse', [
      state('active', style({
        opacity: '1',
        display: 'block'
      })),
      state('inactive', style({
        opacity: '0',
        display: 'none'
      })),
      transition('active => inactive', animate('100ms ease-out')),
      transition('inactive => active', animate('200ms ease-in'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  show: boolean;
  collapse: string;
  navItems: NavItems[];
  constructor(private sitenavService: SiteNavService, private router: Router) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.collapse = 'inactive';
        document.querySelector("html").scrollIntoView({behavior: 'smooth', block: 'center'});
      }
    });
  }

  ngOnInit() {
    this.collapse = 'inactive';
    this.navItems = this.sitenavService.getNavItems();
  }

  getNavItems() {
    return []
  }

  toggleCollapse(collapse): string {
    collapse = collapse == 'active' ? 'inactive': 'active';
    return collapse;
  }

  toggleMenu() {
    this.collapse = this.toggleCollapse(this.collapse);
  }

}
