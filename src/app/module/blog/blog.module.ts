import { NgModule } from '@angular/core';
import { BlogPageComponent } from './page/blog-page/blog-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './component/blog-list/blog-list.component';



@NgModule({
  declarations: [
    BlogPageComponent,
    BlogListComponent
  ],
  imports: [
    SharedModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
