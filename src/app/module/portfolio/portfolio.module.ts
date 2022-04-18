import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PortfolioPageComponent } from './page/portfolio-page/portfolio-page.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioListComponent } from './component/portfolio-list/portfolio-list.component';
import { PortfolioItemComponent } from './component/portfolio-item/portfolio-item.component';



@NgModule({
  declarations: [
    PortfolioPageComponent,
    PortfolioListComponent,
    PortfolioItemComponent
  ],
  imports: [
    SharedModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
