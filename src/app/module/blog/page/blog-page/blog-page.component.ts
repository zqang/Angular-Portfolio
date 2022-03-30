import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  src = "/assets/fbprofilepic.jpg";
  placeholder ='/assets/fbprofilepic.jpg?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit';
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
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
