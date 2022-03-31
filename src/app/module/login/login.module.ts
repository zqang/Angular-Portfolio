import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { LoginState } from './store/state/login.state';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    SharedModule,
    LoginRoutingModule,
    NgxsModule.forFeature([LoginState])
  ]
})
export class LoginModule { }
