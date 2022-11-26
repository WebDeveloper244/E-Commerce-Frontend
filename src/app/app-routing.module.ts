import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './shared-service/guard/guard.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule) }, 
  { path: 'Main-Module', loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule) }, 
  { path: 'Admin-Module', canActivate :[GuardGuard],
  loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule) }, 
  { path: 'Management-Module', loadChildren: () => import('./management-module/management-module.module').then(m => m.ManagementModuleModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
