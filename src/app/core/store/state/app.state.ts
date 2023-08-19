import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { SetIsMobile } from "../action/app.action";

export interface AppStateModel {
  isMobile: boolean;
}

const appStateDefaults: AppStateModel = {
  isMobile: false,
};

@State<AppStateModel>({
  name: 'app',
  defaults: appStateDefaults,
})
@Injectable()
export class AppState {


  @Selector()
  static isMobile(state: AppStateModel): boolean {
    return state.isMobile;
  }

  constructor() {}

  @Action(SetIsMobile)
  setIsMobile(ctx: StateContext<AppStateModel>) {
    ctx.patchState({
      isMobile: true
    })
  }

}

