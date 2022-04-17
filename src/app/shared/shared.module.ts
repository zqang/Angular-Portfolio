import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZorroModule } from './zorro.module';
import { RouterModule } from '@angular/router';
import { AnchorComponent } from './component/anchor/anchor.component';
import { MatchesDirective } from './directive/match.directive';



@NgModule({
  declarations: [
    AnchorComponent,
    MatchesDirective
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
  ]
})
export class SharedModule { }
