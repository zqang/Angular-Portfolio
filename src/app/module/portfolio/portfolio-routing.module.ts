import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioItemComponent } from './component/portfolio-item/portfolio-item.component';
import { PortfolioListComponent } from './component/portfolio-list/portfolio-list.component';
import { PortfolioPageComponent } from './page/portfolio-page/portfolio-page.component';

const routes: Routes = [
  {path: '', component: PortfolioPageComponent, children: [
    {path: '', component: PortfolioListComponent},
    {path: ':id', component: PortfolioItemComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
