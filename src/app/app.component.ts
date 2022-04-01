import { Component, NgZone, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetIsMobile } from './core/store/action/app.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store){}

  ngOnInit(): void {
    if (window.matchMedia('(max-width: 768px)').matches) {

      this.store.dispatch(new SetIsMobile()).subscribe(() => {
        console.log("this has dispatch")
      }
      );
    }
  }

}
