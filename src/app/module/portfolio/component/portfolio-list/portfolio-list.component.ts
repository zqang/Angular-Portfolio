import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription, tap } from 'rxjs';
import { BASE_URL } from 'src/app/shared/constant/url.constants';
import { Portfolio } from '../../model/portfolio';
import { GetPortfolio, GetPortfolioList } from '../../store/action/portfolio.action';
import { PortfolioState } from '../../store/state/portfolio.state';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {
  @Select(PortfolioState.portfolios)portfolios$!: Observable<Portfolio[]>;
  @Select(PortfolioState.arePortfoliosLoaded) arePortfoliosLoaded$! : Observable<boolean>;

  arePortfolioLoadedSub!: Subscription;

  baseUrl: string = BASE_URL

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit() {
    this.arePortfolioLoadedSub = this.arePortfoliosLoaded$.pipe(
      tap((arePortfoliosLoaded) => {
        if (!arePortfoliosLoaded) {
          this.store.dispatch(new GetPortfolioList());
        }
      })
    ).subscribe(value => {
      console.log('done loaded', value)
    });
  }

  ngOnDestroy() {
    this.arePortfolioLoadedSub.unsubscribe();
  }

  onNavigatePortfolio(id : string){
    this.router.navigate([id], {relativeTo: this.route})
    this.store.dispatch(new GetPortfolio(id))
  }

}
