import { Component, OnInit } from '@angular/core';
import { faHtml5, faCss3, faSquareJs, faReact, faAngular, faMicrosoft, faJira, faGit, faDocker } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit {
  title = "Tech Stack"
  layoutStyle= "background-color: #acb1d6;"

  constructor() { }

  ngOnInit(): void {
  }

}
