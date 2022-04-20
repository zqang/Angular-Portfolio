import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogItemComponent } from './component/blog-item/blog-item.component';
import { BlogListComponent } from './component/blog-list/blog-list.component';
import { BlogPageComponent } from './page/blog-page/blog-page.component';

const routes: Routes = [
  {path: '', component: BlogPageComponent, children: [
    {path: '', component: BlogListComponent},
    {path: ':id', component: BlogItemComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
