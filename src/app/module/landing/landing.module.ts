import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { SectionTitleLayoutComponent } from './layout/section-title-layout/section-title-layout.component';
import { ProfilePictureComponent } from './component/profile-picture/profile-picture.component';
import { CareerSummaryComponent } from './component/career-summary/career-summary.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { SkillsComponent } from './component/skills/skills.component';
import { QualificationsComponent } from './component/qualifications/qualifications.component';
import { BriefPortfolioComponent } from './component/brief-portfolio/brief-portfolio.component';
import { BlogSummaryComponent } from './component/blog-summary/blog-summary.component';
import { TechStackComponent } from './component/tech-stack/tech-stack.component';
import { NewAboutMeComponent } from './component/new-about-me/new-about-me.component';
import { NewTechStackComponent } from './component/new-tech-stack/new-tech-stack.component';
import { NewContactDetailComponent } from './component/new-contact-detail/new-contact-detail.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    SectionTitleLayoutComponent,
    ProfilePictureComponent,
    CareerSummaryComponent,
    AboutMeComponent,
    SkillsComponent,
    QualificationsComponent,
    BriefPortfolioComponent,
    BlogSummaryComponent,
    TechStackComponent,
    NewAboutMeComponent,
    NewTechStackComponent,
    NewContactDetailComponent,
  ],
  imports: [
    SharedModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
