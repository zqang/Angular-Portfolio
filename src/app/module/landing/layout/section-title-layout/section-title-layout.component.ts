import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-title-layout',
  templateUrl: './section-title-layout.component.html',
  styleUrls: ['./section-title-layout.component.scss']
})
export class SectionTitleLayoutComponent implements OnInit {

  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

  onBack(): void {
    console.log('onBack');
  }

}
