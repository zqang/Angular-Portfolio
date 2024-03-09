import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
import { SetIsContactFormModalVisible } from 'src/app/core/store/action/app.action';
import { AppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-career-summary',
  templateUrl: './career-summary.component.html',
  styleUrls: ['./career-summary.component.scss'],
})
export class CareerSummaryComponent implements OnInit {
  @Select(AppState.isContactFormModalVisible)
  isContactModalVisible$!: Observable<boolean>;
  isCMVisible: boolean = false;
  contactForm!: FormGroup;

  constructor(
    private modal: NzModalService,
    private fb: FormBuilder,
    private store: Store
  ) {
    this.isContactModalVisible$.subscribe((data: boolean) => {
      this.isCMVisible = data;
    });
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      enquiry: [null, [Validators.required, Validators.minLength(10)]],
    });
  }

  openContactFormModal(): void {
    this.store.dispatch(new SetIsContactFormModalVisible(true));
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.store.dispatch(new SetIsContactFormModalVisible(false));
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.store.dispatch(new SetIsContactFormModalVisible(false));
  }

  submitForm(): void {
    if (this.contactForm.valid) {
      // this.store.dispatch();
      this.contactForm.reset();
      console.log('send email function checked');
    } else {
      Object.values(this.contactForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }

    this.store.dispatch(new SetIsContactFormModalVisible(false));
  }

  openResume() {
    window.open('../../../../../assets/AlvinAngZeeQin-2024.pdf', '_blank');
  }
}
