import { NgModule } from '@angular/core';
import { BlogPageComponent } from './page/blog-page/blog-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './component/blog-list/blog-list.component';
import { NgxsModule } from '@ngxs/store';
import { BlogDetailComponent } from './component/blog-detail/blog-detail.component';



@NgModule({
  declarations: [
    BlogPageComponent,
    BlogListComponent,
    BlogDetailComponent
  ],
  imports: [
    SharedModule,
    BlogRoutingModule,
    // NgxsModule.forFeature([BlogState])
  ]
})
export class BlogModule { }
