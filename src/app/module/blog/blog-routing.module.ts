import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './page/blog-page/blog-page.component';
import { BlogDetailComponent } from './component/blog-detail/blog-detail.component';
import { BlogListComponent } from './component/blog-list/blog-list.component';

const routes: Routes = [
  {path: '', component: BlogPageComponent, children: [
    {path: '', component: BlogListComponent},
    {path: ':id', component: BlogDetailComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
