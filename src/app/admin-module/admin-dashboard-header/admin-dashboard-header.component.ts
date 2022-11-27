import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard-header',
  templateUrl: './admin-dashboard-header.component.html',
  styleUrls: ['./admin-dashboard-header.component.css']
})
export class AdminDashboardHeaderComponent implements OnInit {
  @Output() navToggle = new EventEmitter<boolean>()

  menuStatus:boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  SideNavToggle(){
    this.menuStatus = !this.menuStatus
    this.navToggle.emit(this.menuStatus);
  }

}
