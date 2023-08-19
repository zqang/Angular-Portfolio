import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  isMobile: boolean = false ;

  title = "About Me"
  src = "/assets/profile_pic_blob.png";
  placeholder ='/assets/profile_pic_blob.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200';

  constructor() {
  }

  ngOnInit(): void {
  }

}
