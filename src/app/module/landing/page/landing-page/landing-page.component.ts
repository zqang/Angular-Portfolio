import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppState, AppStateModel } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  @Select(AppState.isMobile) isMobile$!: Observable<boolean>;

  isMobile: boolean = false ;

  title = "About Me"
  src = "/assets/fbprofilepic-removebg.png";
  srcBlob = "/assets/blob.svg";
  placeholder ='/assets/fbprofilepic-removebg.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200';
  placeholderBlob ='/assets/blob.svg?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200';



    data = [
      {
        title: 'Melaka, Malaysia'
      },
      {
        title: 'LinkedIn'
      },
      {
        title: 'Github'
      },
      {
        title: 'Facebook'
      },
      {
        title: 'Whatsapp'
      },
    ];
  constructor(private store: Store) {
    this.isMobile$.subscribe((data) => {
      this.isMobile = data;
    })
  }

  ngOnInit(): void {
  }

}
