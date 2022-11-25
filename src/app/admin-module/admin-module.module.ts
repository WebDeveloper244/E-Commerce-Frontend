import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { CreateProductComponent } from './admin-component/create-product/create-product.component';
import { ProductAnalyticsComponent } from './admin-component/product-analytics/product-analytics.component';
import { AdminDashboardHeaderComponent } from './admin-dashboard-header/admin-dashboard-header.component';
import { MaterialModuleModule } from '../material-module/material-module.module';


@NgModule({
  declarations: [
    AdminModuleComponent,
    AdminComponentComponent,
    DashboardComponent,
    CreateProductComponent,
    ProductAnalyticsComponent,
    AdminDashboardHeaderComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    MaterialModuleModule
  ]
})
export class AdminModuleModule { }
