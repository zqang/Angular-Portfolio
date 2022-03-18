import { NgModule } from '@angular/core';
import { BlogPageComponent } from './page/blog-page/blog-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';



@NgModule({
  declarations: [
    BlogPageComponent
  ],
  imports: [
    SharedModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
