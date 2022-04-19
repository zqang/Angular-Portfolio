import { State, Selector, StateContext, Action } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Portfolio } from '../../model/portfolio';
import { PortfolioRestService } from '../../service/portfolio-rest.service';
import { GetPortfolioList } from '../action/portfolio.action';

export interface PortfolioStateModel {
  portfolio: Portfolio[];
  arePortfoliosLoaded: boolean;
}

const portfolioStateDefaults: PortfolioStateModel = {
  portfolio: [],
  arePortfoliosLoaded: false,
};

@State<PortfolioStateModel>({
  name: 'portfolio',
  defaults: portfolioStateDefaults,
})
@Injectable()
export class PortfolioState {


  @Selector()
  static portfolios(state: PortfolioStateModel): Portfolio[]{
    return state.portfolio;
  }

  @Selector()
  static arePortfoliosLoaded(state: PortfolioStateModel): boolean {
      return state.arePortfoliosLoaded;
  }

  constructor(private portfolioService: PortfolioRestService) {}

  @Action(GetPortfolioList)
    getPortfolios({getState, setState}: StateContext<PortfolioStateModel>) {
      return this.portfolioService.getPortfolios().pipe(
        tap(result => {
          const state = getState();
          setState({
            ...state,
            portfolio: result,
            arePortfoliosLoaded: true,
          });
        })
      );
    }
}
