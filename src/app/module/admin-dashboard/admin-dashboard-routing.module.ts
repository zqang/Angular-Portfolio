import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardLayoutComponent } from './layout/admin-dashboard-layout/admin-dashboard-layout.component';
import {  BlogTableComponent } from './page/blog-table/blog-table.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PortfolioEditComponent } from './page/portfolio-edit/portfolio-edit.component';
import { CreateNewComponent } from './page/create-new/create-new.component';
import { BlogLayoutComponent } from './layout/blog-layout/blog-layout.component';


const routes: Routes = [
  {
    path: '',
    component: AdminDashboardLayoutComponent,
    children: [
      {
        path: 'home',
        component: DashboardComponent,
      },
      {
        path: 'blog-table',
        component: BlogLayoutComponent,
        children: [
          {path: '', component: BlogTableComponent},
          {path: ':id', component: CreateNewComponent},
          {path: 'create', component: CreateNewComponent}
        ]
      },
      {
        path: 'portfolio-table',
        component: PortfolioEditComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
