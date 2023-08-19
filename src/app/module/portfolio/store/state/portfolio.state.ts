import { State, Selector, StateContext, Action } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Portfolio, Portfolio_Defaults } from '../../model/portfolio';
import { PortfolioRestService } from '../../service/portfolio-rest.service';
import { GetPortfolioList, GetPortfolio, SetArePortfoliosLoaded } from '../action/portfolio.action';

export interface PortfolioStateModel {
  portfolios: Portfolio[];
  arePortfoliosLoaded: boolean;
  portfolio: Portfolio;
}

const portfolioStateDefaults: PortfolioStateModel = {
  portfolios: [],
  arePortfoliosLoaded: false,
  portfolio: Portfolio_Defaults,
};

@State<PortfolioStateModel>({
  name: 'portfolio',
  defaults: portfolioStateDefaults,
})
@Injectable()
export class PortfolioState {

  @Selector()
  static portfolio(state: PortfolioStateModel): Portfolio{
    return state.portfolio;
  }

  @Selector()
  static portfolios(state: PortfolioStateModel): Portfolio[]{
    return state.portfolios;
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
            portfolios: result,
            arePortfoliosLoaded: true,
          });
        })
      );
    }

  @Action(GetPortfolio)
  getPortfolio({getState, setState}: StateContext<PortfolioStateModel>, action: GetPortfolio) {
    const state = getState();
    setState({
      ...state,
      portfolio: state.portfolios.filter((data) => { return data.id === action.payload})[0]
    })
  }

  @Action(SetArePortfoliosLoaded)
  setArePortfoliosLoaded({getState, setState}: StateContext<PortfolioStateModel>, action: SetArePortfoliosLoaded) {
    const state = getState();
    setState({
      ...state,
      arePortfoliosLoaded: action.payload
    })
  }
}
