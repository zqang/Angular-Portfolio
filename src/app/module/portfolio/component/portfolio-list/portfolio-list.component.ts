import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../../model/portfolio';
import { PortfolioRestService } from '../../service/portfolio-rest.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {
  data: Portfolio[] = [];
  newData: Portfolio[] = [];

  constructor(private portfolioService: PortfolioRestService){

  }

  ngOnInit(): void {
    this.loadData(1);
    this.portfolioService.getPortfolio().subscribe((data: Portfolio[]) => {
      console.log(data);
      this.newData = data;
    })
  }

  loadData(pi: number): void {
    // this.data = new Array(5).fill({}).map((_, index) => ({
    //   href: 'http://ant.design',
    //   title: `ant design part ${index} (page: ${pi})`,
    //   avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    //   description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    //   content:
    //     'We supply a series of design principles, practical patterns and high quality design resources ' +
    //     '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    // }));
    this.data = new Array(5).fill({}).map((_, index) => ({
      id: '1',
      date: '19/02/2022',
      name: `ant design part ${index} (page: ${pi})`,
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      body:
        'We supply a series of design principles, practical patterns and high quality design resources ' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      image: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
      is_active: true
    }));
  }
}
