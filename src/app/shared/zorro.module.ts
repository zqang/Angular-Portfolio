import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';



@NgModule({
  declarations: [],
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule
  ]
})
export class ZorroModule { }
