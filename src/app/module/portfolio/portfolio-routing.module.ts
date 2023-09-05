import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioListComponent } from './component/portfolio-list/portfolio-list.component';
import { PortfolioPageComponent } from './page/portfolio-page/portfolio-page.component';

const routes: Routes = [
  {path: '', component: PortfolioPageComponent, children: [
    {path: '', component: PortfolioListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
