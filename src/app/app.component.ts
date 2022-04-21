import { Component, HostListener, NgZone, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetAreBlogsLoaded } from './module/blog/store/action/blog.action';
import { SetArePortfoliosLoaded } from './module/portfolio/store/action/portfolio.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store){}

  ngOnInit(): void {

  }

  @HostListener('window:beforeunload', [ '$event' ])
  beforeUnloadHandler(event: any) {
      this.store.dispatch(new SetArePortfoliosLoaded(false));
      this.store.dispatch(new SetAreBlogsLoaded(false));
  }

}
