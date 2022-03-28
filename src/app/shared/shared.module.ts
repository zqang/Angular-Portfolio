import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ZorroModule } from './zorro.module';
import { RouterModule } from '@angular/router';
import { AnchorComponent } from './component/anchor/anchor.component';



@NgModule({
  declarations: [
    AnchorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ZorroModule
  ],
  exports: [
    AnchorComponent,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ZorroModule,
    RouterModule,
  ]
})
export class SharedModule { }
