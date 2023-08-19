import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  src = "/assets/fbprofilepic.jpg";
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
