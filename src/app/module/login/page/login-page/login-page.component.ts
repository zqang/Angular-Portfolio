import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Login } from '../../store/action/login.action';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  validateForm!: FormGroup;
  invalidLogin?: boolean;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router
  ) {}

  submitForm(): void {
    if (this.validateForm.valid) {
      this.store.dispatch(new Login(this.validateForm.getRawValue())).subscribe((data) => {
        this.invalidLogin = false;
        this.router.navigate(['/dashboard/home']);
     }, error => {
      this.invalidLogin = true;
     });
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

}
