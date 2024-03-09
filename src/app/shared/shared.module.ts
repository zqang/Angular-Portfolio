import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AnchorComponent } from './component/anchor/anchor.component';
import { CkeeditorComponent } from './component/ckeeditor/ckeeditor.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoadingSpinnerComponent } from './component/loading-spinner/loading-spinner.component';
import { TagComponent } from './component/tag/tag.component';
import { MatchesDirective } from './directive/match.directive';
import { ZorroModule } from './zorro.module';

@NgModule({
  declarations: [
    AnchorComponent,
    MatchesDirective,
    ContactComponent,
    LoadingSpinnerComponent,
    CkeeditorComponent,
    TagComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ZorroModule,
    ReactiveFormsModule,
    CKEditorModule,
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
    LoadingSpinnerComponent,
    CkeeditorComponent,
    TagComponent,
  ],
})
export class SharedModule {}
