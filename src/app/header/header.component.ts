import { Component, OnInit } from '@angular/core';
import { 
  trigger,
  state,
  style,
  animate,
  transition
 } from '@angular/animations';

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
  constructor() { }

  ngOnInit() {
    this.collapse = 'inactive';
  }

  toggleMenu() {
    this.collapse = this.collapse == 'active' ? 'inactive': 'active';
  }

}
