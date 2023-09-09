import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  title = "About Me"
  description = "I am a minimalist. Just like my website. Plain and Simple."
  + "\r\n I love to think. and learn"

  src = "assets/2023-09profile.png";
  placeholder ='/assets/2023-09profile.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200';

  constructor() { }

  ngOnInit(): void {
  }

}
