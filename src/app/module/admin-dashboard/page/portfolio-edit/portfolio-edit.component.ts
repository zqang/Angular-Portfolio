import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddPortfolio, GetPortfolios, UpdatePortfolio } from 'src/app/core/store/action/portfolio.action';
import { PortfolioState } from 'src/app/core/store/state/portfolio.state';
import { Portfolio } from 'src/app/shared/model/portfolio';

@Component({
  selector: 'app-portfolio-edit',
  templateUrl: './portfolio-edit.component.html',
  styleUrls: ['./portfolio-edit.component.scss']
})
export class PortfolioEditComponent implements OnInit {
  portfolioForm!: FormGroup;
  paramId!: string;

  @Select(PortfolioState.portfolio)portfolio$!: Observable<Portfolio>;
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.paramId = params.get('id')
    });
    console.log(this.paramId)
  }

  submitForm(): void {
    if (this.portfolioForm.valid) {
      if(this.paramId!=null){
        const portfolioFormValues: Portfolio = this.portfolioForm.getRawValue();
        portfolioFormValues.id = parseInt(this.paramId);
        console.log(portfolioFormValues);
        this.store.dispatch(new UpdatePortfolio(portfolioFormValues)).subscribe((data) => {
          this.store.dispatch(new GetPortfolios());
          this.router.navigate(['..'], {relativeTo: this.route});
        });
      }else {
        this.store.dispatch(new AddPortfolio(this.portfolioForm.getRawValue())).subscribe((data) => {
          this.store.dispatch(new GetPortfolios());
          this.router.navigate(['..'], {relativeTo: this.route});
       });
      }
    } else {
      Object.values(this.portfolioForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


  ngOnInit(): void {
    this.portfolioForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      githubUrl: [null, [Validators.required]]
    });


    if (this.paramId!=null){
      this.portfolio$.subscribe((value : Portfolio) => {
        this.portfolioForm.controls['title'].setValue(value.title);
        this.portfolioForm.controls['description'].setValue(value.description);
        this.portfolioForm.controls['githubUrl'].setValue(value.githubUrl);
      })
    }
  }


  onNavigateBack() : void {
    this.router.navigate(['/dashboard/portfolio-table']);
  }
}
