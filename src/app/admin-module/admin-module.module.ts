import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { CreateProductComponent } from './admin-component/create-product/create-product.component';
import { ProductAnalyticsComponent } from './admin-component/product-analytics/product-analytics.component';
import { AdminDashboardHeaderComponent } from './admin-dashboard-header/admin-dashboard-header.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminProfileComponent } from './admin-component/admin-profile/admin-profile.component';


@NgModule({
  declarations: [
    AdminModuleComponent,
    DashboardComponent,
    CreateProductComponent,
    ProductAnalyticsComponent,
    AdminDashboardHeaderComponent,
    AdminSidebarComponent,
    AdminProfileComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule
  ]
})
export class AdminModuleModule { }
