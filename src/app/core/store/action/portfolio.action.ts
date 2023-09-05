import { Portfolio } from "src/app/shared/model/portfolio";

export class SetArePortfoliosLoaded{
  static readonly type = '[Portfolio] Set Are Portfolios Loaded';
  constructor(public payload: boolean){}
}

export class GetPortfolios {
  static readonly type = '[Portfolio] Get Portfolio';
}

export class GetPortfolio{
  static readonly type = '[Portfolio] Get a Portfolio';
  constructor(public payload: string){}
}


export class UpdatePortfolio {
  static readonly type = '[Portfolio] Update Portfolio';
  constructor(public payload: Portfolio){}
}

export class DeletePortfolio {
  static readonly type = '[Portfolio] Delete Portfolio';
  constructor(public payload: number){}
}

export class AddPortfolio {
  static readonly type = '[Portfolio] Add Portfolio';
  constructor(public payload: Portfolio){}
}
