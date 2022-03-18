import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ZorroModule } from './zorro.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ZorroModule
  ]
})
export class SharedModule { }
