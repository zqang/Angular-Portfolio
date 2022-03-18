import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  test: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.test = this.test + 32;
  }

}
