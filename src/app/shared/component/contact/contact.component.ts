import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() isLanding: boolean = false;

  src = "/assets/fbprofilepic.jpg";
  data = [
    {
      title: 'Melaka, Malaysia',
      url: 'https://www.google.com/maps/place/Malacca/@2.2373773,102.1814628,12z/data=!3m1!4b1!4m5!3m4!1s0x31d1ee278e8c65dd:0x32a7281769e016a!8m2!3d2.189594!4d102.2500868'
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alvin-ang-zee-qin-5886a4117/',
    },
    {
      title: 'Github',
      url: 'https://github.com/zqang',
    },
    {
      title: 'Facebook',
      url: 'https://www.facebook.com/zq.ang.9/',
    },
    {
      title: 'Whatsapp',
      url: 'https://wa.me/601162548957'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onOpenNewTab(url: string){
    window.open(url, "_blank");
  }

}
