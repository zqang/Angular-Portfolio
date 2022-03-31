import { Portfolio } from "../../model/portfolio"

export class GetPortfolioData {
  static readonly type = '[Portfolio] Get Portfolio Data';
  constructor(public payload: Portfolio){}
}

export class UpdatePortfolioData {
  static readonly type = '[Portfolio] Update Portfolio Data';
  constructor(public payload: Portfolio){}
}

export class DeletePortfolioData {
  static readonly type = '[Portfolio] Delete Portfolio Data';
  constructor(public payload: Portfolio){}
}

export class AddPortfolioData {
  static readonly type = '[Portfolio] Add Portfolio Data';
  constructor(public payload: Portfolio){}
}
