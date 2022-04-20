import { NgModule } from '@angular/core';
import { BlogPageComponent } from './page/blog-page/blog-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './component/blog-list/blog-list.component';
import { BlogItemComponent } from './component/blog-item/blog-item.component';
import { NgxsModule } from '@ngxs/store';
import { BlogState } from './store/state/blog.state';



@NgModule({
  declarations: [
    BlogPageComponent,
    BlogListComponent,
    BlogItemComponent,
  ],
  imports: [
    SharedModule,
    BlogRoutingModule,
    NgxsModule.forFeature([BlogState])
  ]
})
export class BlogModule { }
