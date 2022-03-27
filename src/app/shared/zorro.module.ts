import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';


@NgModule({
  declarations: [],
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzSpaceModule,
    NzImageModule,
    NzGridModule,
    NzPageHeaderModule
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzSpaceModule,
    NzImageModule,
    NzGridModule,
    NzPageHeaderModule
  ]
})
export class ZorroModule { }
