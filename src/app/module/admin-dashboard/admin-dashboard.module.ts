import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardLayoutComponent } from './layout/admin-dashboard-layout/admin-dashboard-layout.component';
import { MarkdownEditorComponent } from './component/markdown-editor/markdown-editor.component';
import { PortfolioEditComponent } from './page/portfolio-edit/portfolio-edit.component';
import { CreateNewComponent } from './page/create-new/create-new.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { BlogTableComponent } from './page/blog-table/blog-table.component';
import { BlogLayoutComponent } from './layout/blog-layout/blog-layout.component';


@NgModule({
  declarations: [
    AdminDashboardLayoutComponent,
    MarkdownEditorComponent,
    PortfolioEditComponent,
    CreateNewComponent,
    DashboardComponent,
    BlogTableComponent,
    BlogLayoutComponent
  ],
  imports: [
    SharedModule,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
