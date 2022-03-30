import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardLayoutComponent } from './layout/admin-dashboard-layout/admin-dashboard-layout.component';
import { BlogEditComponent } from './page/blog-edit/blog-edit.component';
import { CreateNewComponent } from './page/create-new/create-new.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { PortfolioEditComponent } from './page/portfolio-edit/portfolio-edit.component';


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
        path: 'blog-edit',
        component: BlogEditComponent,
      },
      {
        path: 'portfolio-edit',
        component: PortfolioEditComponent,
      },
      {
        path: 'create-new',
        component: CreateNewComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
