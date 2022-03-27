import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTitleLayoutComponent } from './section-title-layout.component';

describe('SectionTitleLayoutComponent', () => {
  let component: SectionTitleLayoutComponent;
  let fixture: ComponentFixture<SectionTitleLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTitleLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTitleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
