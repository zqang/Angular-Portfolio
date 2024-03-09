import { Component, Input, OnInit } from '@angular/core';
import * as Editor from './ckeditor';

@Component({
  selector: 'app-ckeeditor',
  templateUrl: './ckeeditor.component.html',
  styleUrls: ['./ckeeditor.component.scss'],
})
export class CkeeditorComponent implements OnInit {
  @Input() fControlName: any;
  @Input() fGroup: any;

  constructor() {}

  public Editor: any = Editor;

  ngOnInit(): void {}
}
