import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  isMobile: boolean = false ;

  title = "About Me"
  src = "assets/2023-09profile.png";
  placeholder ='/assets/2023-09profile.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200';

  constructor(private viewportScroller: ViewportScroller) {
  }

  ngOnInit(): void {
  }

  public scrollToAnchroingPosition(elementId: string): void {
    this.viewportScroller.setOffset([0, 100]);
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
