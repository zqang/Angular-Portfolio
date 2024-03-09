import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetIsContactFormModalVisible } from 'src/app/core/store/action/app.action';

@Component({
  selector: 'app-new-contact-detail',
  templateUrl: './new-contact-detail.component.html',
  styleUrls: ['./new-contact-detail.component.scss'],
})
export class NewContactDetailComponent implements OnInit {
  contacts = [
    {
      name: 'Email',
      value: 'mailto:alvinang1406@gmail.com',
    },
    {
      name: 'Linkedin',
      value: 'https://www.linkedin.com/in/alvin-ang-zee-qin-5886a4117/',
    },
    {
      name: 'Github',
      value: 'https://github.com/zqang',
    },
  ];
  constructor(private store: Store) {}

  ngOnInit(): void {}

  closeContactFormModal() {
    console.log('closeContactFormModal');
    this.store.dispatch(new SetIsContactFormModalVisible(false));
  }
}
