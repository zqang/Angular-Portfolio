import { Login, Logout } from './../action/login.action';
import { State, Selector, StateContext, Action } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { LoginService } from '../../service/login.service';
import { Injectable } from '@angular/core';

//check for user model need use or not?
export interface LoginStateModel {
  token: string | null;
  username: string | null;
}

const loginStateDefaults: LoginStateModel = {
  token: null,
  username: null,
};

@State<LoginStateModel>({
  name: 'login',
  defaults: loginStateDefaults,
})
@Injectable()
export class LoginState {


  @Selector()
  static token(state: LoginStateModel): string | null {
    return state.token;
  }

  @Selector()
  static isAuthenticated(state: LoginStateModel): boolean {
    return !!state.token;
  }

  constructor(private loginService: LoginService) {}

  @Action(Login)
  login(ctx: StateContext<LoginStateModel>, action: Login) {
    return this.loginService.login(action.payload).pipe(
      tap((result: { token: string }) => {
        ctx.patchState({
          token: result.token,
          username: action.payload.username
        });
      })
      );
    }

    @Action(Logout)
    logout(ctx: StateContext<LoginStateModel>) {
      ctx.setState({
        token: null,
        username: null
      });
    }
}
