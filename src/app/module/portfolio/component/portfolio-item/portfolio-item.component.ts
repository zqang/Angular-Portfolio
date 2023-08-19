import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Portfolio } from '../../model/portfolio';
import { PortfolioState } from '../../store/state/portfolio.state';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {

  @Select(PortfolioState.portfolio)portfolio$!: Observable<Portfolio>;

  portfolio!: Portfolio;

  constructor() { }

  ngOnInit(): void {
    this.portfolio$.subscribe(data => {
      this.portfolio = data;
    })
  }

}
