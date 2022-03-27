import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { SectionTitleComponent } from './component/section-title/section-title.component';
import { SectionTitleLayoutComponent } from './layout/section-title-layout/section-title-layout.component';
import { ProfilePictureComponent } from './component/profile-picture/profile-picture.component';
import { CareerSummaryComponent } from './component/career-summary/career-summary.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { SkillsComponent } from './component/skills/skills.component';
import { QualificationsComponent } from './component/qualifications/qualifications.component';
import { BriefPortfolioComponent } from './component/brief-portfolio/brief-portfolio.component';
import { BlogSummaryComponent } from './component/blog-summary/blog-summary.component';
import { ContactMeComponent } from './component/contact-me/contact-me.component';
import { ServicesOfferComponent } from './component/services-offer/services-offer.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    SectionTitleComponent,
    SectionTitleLayoutComponent,
    ProfilePictureComponent,
    CareerSummaryComponent,
    AboutMeComponent,
    SkillsComponent,
    QualificationsComponent,
    BriefPortfolioComponent,
    BlogSummaryComponent,
    ContactMeComponent,
    ServicesOfferComponent
  ],
  imports: [
    SharedModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
