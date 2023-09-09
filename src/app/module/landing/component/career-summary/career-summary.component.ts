import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-career-summary',
  templateUrl: './career-summary.component.html',
  styleUrls: ['./career-summary.component.scss']
})
export class CareerSummaryComponent implements OnInit {
  isContactModalVisible = false;
  contactForm!: FormGroup;

  constructor(
    private modal: NzModalService,
    private fb: FormBuilder,
    private store: Store) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      email: [null, [Validators.required]],
      enquiry: [null, [Validators.required]],
    });
  }

  openContactFormModal() : void {
    this.isContactModalVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isContactModalVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isContactModalVisible = false;
  }



  submitForm(): void {
    if (this.contactForm.valid) {
      // this.store.dispatch();
      console.log('send email function checked')
    } else {
      Object.values(this.contactForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
