import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {

  src = "/assets/fbprofilepic-removebg.png";
  data = [
    {
      title: 'Melaka, Malaysia'
    },
    {
      title: 'LinkedIn'
    },
    {
      title: 'Github'
    },
    {
      title: 'Facebook'
    },
    {
      title: 'Whatsapp'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
