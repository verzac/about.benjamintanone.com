import { Component, OnInit } from '@angular/core';
import { 
  trigger,
  state,
  style,
  animate,
  transition
 } from '@angular/animations';
import { SiteNavService } from '../common/service/sitenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('collapse', [
      state('active', style({
        opacity: '1',
        display: 'block',
        transform: 'translate3d(0, 0, 0)'
      })),
      state('inactive', style({
        opacity: '0',
        display: 'none',
        transform: 'translate3d(0, 100%, 0)'
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
  constructor(private sitenavService: SiteNavService) { }

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
