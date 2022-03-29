import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  title = "About Me"
  src = "/assets/fbprofilepic-removebg.png";
  placeholder =
    '/assets/fbprofilepic-removebg.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200';

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
