import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  @Input() sideNavStatus:boolean=true

  navItem:any=[
    {
      number:1,
      name:'Dashboard',
      font:'fa-solid fa-house'
    },
    {
      number:2,
      name:'Create-Product',
      font:'fa-solid fa-cart-shopping'
    },
    {
      number:3,
      name:'Analytics',
      font:'fa-solid fa-chart-simple'
    },
  ]
  
    constructor() { }
  
    ngOnInit(): void {
    }
}
