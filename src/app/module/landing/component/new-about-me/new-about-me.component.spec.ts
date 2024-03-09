import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAboutMeComponent } from './new-about-me.component';

describe('NewAboutMeComponent', () => {
  let component: NewAboutMeComponent;
  let fixture: ComponentFixture<NewAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAboutMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
