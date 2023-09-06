import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardLayoutComponent } from './layout/admin-dashboard-layout/admin-dashboard-layout.component';
import {  BlogTableComponent } from './page/blog-table/blog-table.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PortfolioEditComponent } from './page/portfolio-edit/portfolio-edit.component';
import { CreateNewComponent } from './page/create-new/create-new.component';
import { BlogLayoutComponent } from './layout/blog-layout/blog-layout.component';
import { PortfolioLayoutComponent } from './layout/portfolio-layout/portfolio-layout.component';
import { PortfolioTableComponent } from './page/portfolio-table/portfolio-table.component';


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
          {path: 'edit/:id', component: CreateNewComponent},
          {path: 'create', component: CreateNewComponent}
        ]
      },
      {
        path: 'portfolio-table',
        component: PortfolioLayoutComponent,
        children: [
          {path: '', component: PortfolioTableComponent},
          {path: 'edit/:id', component: PortfolioEditComponent},
          {path: 'create', component: PortfolioEditComponent}
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
