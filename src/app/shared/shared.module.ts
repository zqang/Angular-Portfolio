import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZorroModule } from './zorro.module';
import { RouterModule } from '@angular/router';
import { AnchorComponent } from './component/anchor/anchor.component';
import { MatchesDirective } from './directive/match.directive';
import { ContactComponent } from './component/contact/contact.component';
import { LoadingSpinnerComponent } from './component/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    AnchorComponent,
    MatchesDirective,
    ContactComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ZorroModule,
    ReactiveFormsModule,
  ],
  exports: [
    AnchorComponent,
    CommonModule,
    FormsModule,
    ZorroModule,
    RouterModule,
    ReactiveFormsModule,
    MatchesDirective,
    ContactComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
