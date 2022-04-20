
export class GetPortfolioList {
  static readonly type = '[Portfolio] Get Portfolio List';
}

export class GetPortfolio{
  static readonly type = '[Portfolio] Get Portfolio Item';
  constructor(public payload: string){}
}

