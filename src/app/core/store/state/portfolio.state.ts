import { State, Selector, StateContext, Action } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Portfolio, Portfolio_Defaults } from '../../../shared/model/portfolio';
import { GetPortfolios, GetPortfolio, SetArePortfoliosLoaded, AddPortfolio, DeletePortfolio, UpdatePortfolio } from '../action/portfolio.action';
import { PortfolioService } from 'src/app/shared/service/portfolio.service';

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

  constructor(private portfolioService: PortfolioService) {}

  @Action(GetPortfolios)
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
      portfolio: state.portfolios.filter((data) => { return data.id.toString() === action.payload})[0]
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

  @Action(AddPortfolio)
  addPortfolio({getState, patchState}: StateContext<PortfolioStateModel>, action: AddPortfolio) {
    const state = getState();
    return this.portfolioService.createPortfolio(action.payload).pipe(
      tap((result: any) => {
        console.log(result);
        patchState({
          portfolios: [...state.portfolios, action.payload]
        });
      })
      );
    }

  @Action(UpdatePortfolio)
  updatePortfolio({getState, patchState}: StateContext<PortfolioStateModel>, action: UpdatePortfolio) {
    const state = getState();
    return this.portfolioService.updatePortfolio(action.payload).pipe(
      tap((result: any) => {
        console.log(result);
        patchState({
          portfolios: [...state.portfolios.filter(
            (value: Portfolio) => value.id !== action.payload.id), action.payload]
        });
      })
      );
    }

  @Action(DeletePortfolio)
  deletePortfolio({getState, patchState}: StateContext<PortfolioStateModel>, action: DeletePortfolio) {
    const state = getState();
    return this.portfolioService.deletePortfolio(action.payload).pipe(
      tap((result: any) => {
        console.log(result);
        patchState({
          portfolios: state.portfolios.filter((value: Portfolio) => value.id !== action.payload)
        });
      })
      );
    }
}
