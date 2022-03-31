import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";
import { Portfolio } from "../../model/portfolio";

export interface PortfolioEditStateModel {
  portfolios: Portfolio[];
}

const portfolioEditStateDefaults: PortfolioEditStateModel = {
  portfolios: [],
};

@State<PortfolioEditStateModel>({
  name: 'portfolio',
  defaults: portfolioEditStateDefaults,
})
@Injectable()
export class PortfolioEditState{


}
