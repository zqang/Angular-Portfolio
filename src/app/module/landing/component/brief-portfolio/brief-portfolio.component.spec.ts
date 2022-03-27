import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefPortfolioComponent } from './brief-portfolio.component';

describe('BriefPortfolioComponent', () => {
  let component: BriefPortfolioComponent;
  let fixture: ComponentFixture<BriefPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriefPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
