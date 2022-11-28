import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './admin-component/admin-profile/admin-profile.component';
import { CreateProductComponent } from './admin-component/create-product/create-product.component';
import { DashboardComponent } from './admin-component/dashboard/dashboard.component';
import { ProductAnalyticsComponent } from './admin-component/product-analytics/product-analytics.component';
import { AdminModuleComponent } from './admin-module.component';

const routes: Routes = [
  { path: '', component: AdminModuleComponent,  children:[
    {path: '', component: DashboardComponent },
    {path: 'Dashboard', component: DashboardComponent },
   {path: 'create-product', component: CreateProductComponent },
   {path: 'product-analytics', component: ProductAnalyticsComponent },
   {path: 'admin-profile', component: AdminProfileComponent },
]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
