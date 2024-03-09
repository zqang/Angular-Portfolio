import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-tech-stack',
  templateUrl: './new-tech-stack.component.html',
  styleUrls: ['./new-tech-stack.component.scss'],
})
export class NewTechStackComponent implements OnInit {
  tags: string[] = [
    'Angular',
    'Tailwind CSS',
    '.Net Framework',
    '.Net Core',
    'MSSQL',
    'Azure',
    'Docker',
  ];
  constructor() {}

  ngOnInit(): void {}
}
