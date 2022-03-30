import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardLayoutComponent } from './layout/admin-dashboard-layout/admin-dashboard-layout.component';
import { MarkdownEditorComponent } from './component/markdown-editor/markdown-editor.component';
import { BlogEditComponent } from './page/blog-edit/blog-edit.component';
import { PortfolioEditComponent } from './page/portfolio-edit/portfolio-edit.component';
import { CreateNewComponent } from './page/create-new/create-new.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AdminDashboardLayoutComponent,
    MarkdownEditorComponent,
    BlogEditComponent,
    PortfolioEditComponent,
    CreateNewComponent,
    DashboardComponent,
  ],
  imports: [
    SharedModule,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
