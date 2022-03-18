import { NgModule } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundPageComponent } from './static-page/not-found-page/not-found-page.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent
  ]
})
export class CoreModule { }
