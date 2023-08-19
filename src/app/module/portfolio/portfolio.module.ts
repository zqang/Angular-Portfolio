import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { PortfolioPageComponent } from './page/portfolio-page/portfolio-page.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioListComponent } from './component/portfolio-list/portfolio-list.component';
import { PortfolioItemComponent } from './component/portfolio-item/portfolio-item.component';
import { PortfolioState } from './store/state/portfolio.state';



@NgModule({
  declarations: [
    PortfolioPageComponent,
    PortfolioListComponent,
    PortfolioItemComponent
  ],
  imports: [
    SharedModule,
    PortfolioRoutingModule,
    NgxsModule.forFeature([PortfolioState])
  ]
})
export class PortfolioModule { }
