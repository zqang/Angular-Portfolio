import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DeletePortfolio, GetPortfolio, GetPortfolios, SetArePortfoliosLoaded } from 'src/app/core/store/action/portfolio.action';
import { PortfolioState } from 'src/app/core/store/state/portfolio.state';
import { Portfolio } from 'src/app/shared/model/portfolio';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.scss']
})
export class PortfolioTableComponent implements OnInit {


  @Select(PortfolioState.portfolios)portfolios$!: Observable<Portfolio[]>;
  @Select(PortfolioState.arePortfoliosLoaded) arePortfoliosLoaded$! : Observable<boolean>;

  arePortfoliosLoadedSub!: Subscription;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private modal: NzModalService
    ){}

  ngOnInit(): void {
    this.arePortfoliosLoadedSub = this.arePortfoliosLoaded$.pipe(
      tap((arePortfoliosLoaded) => {
        if (!arePortfoliosLoaded) {
          this.store.dispatch(new GetPortfolios());
        }
      })
    ).subscribe(value => {
      console.log('done loaded', value);
    })
  }

  ngOnDestroy() {
    this.arePortfoliosLoadedSub.unsubscribe();
    this.store.dispatch(new SetArePortfoliosLoaded(false)); //check if got any error or not
  }


  onNavigate(id? : string): void {
    if(!id){
      this.router.navigate(['create'], {relativeTo: this.route});
    }else{
      this.router.navigate([`edit/${id}`], {relativeTo: this.route});
      this.store.dispatch(new GetPortfolio(id));
    }
  }

  deletePortfolio(index : number) : void{
    this.modal.confirm({
      nzTitle: 'Are you sure delete this portfolio?',
      // nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.store.dispatch([new DeletePortfolio(index), new GetPortfolios()]).subscribe(
        () => window.location.reload()),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel'),
      nzCentered : true
    });


  }

}
