import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContactDetailComponent } from './new-contact-detail.component';

describe('NewContactDetailComponent', () => {
  let component: NewContactDetailComponent;
  let fixture: ComponentFixture<NewContactDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewContactDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContactDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
