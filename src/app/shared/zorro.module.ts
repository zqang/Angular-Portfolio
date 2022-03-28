import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@NgModule({
  declarations: [],
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzSpaceModule,
    NzImageModule,
    NzGridModule,
    NzPageHeaderModule,
    NzCardModule,
    NzTimelineModule,
    NzAnchorModule,
    NzListModule,
    NzAvatarModule,
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzSpaceModule,
    NzImageModule,
    NzGridModule,
    NzPageHeaderModule,
    NzCardModule,
    NzTimelineModule,
    NzAnchorModule,
    NzListModule,
    NzAvatarModule,
  ]
})
export class ZorroModule { }
