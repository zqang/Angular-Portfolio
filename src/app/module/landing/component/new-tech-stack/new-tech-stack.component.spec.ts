import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTechStackComponent } from './new-tech-stack.component';

describe('NewTechStackComponent', () => {
  let component: NewTechStackComponent;
  let fixture: ComponentFixture<NewTechStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTechStackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTechStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
