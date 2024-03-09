import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  SetIsContactFormModalVisible,
  SetIsMobile,
} from '../action/app.action';

export interface AppStateModel {
  isMobile: boolean;
  isContactFormModalVisible: boolean;
}

const appStateDefaults: AppStateModel = {
  isMobile: false,
  isContactFormModalVisible: false,
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

  @Selector()
  static isContactFormModalVisible(state: AppStateModel): boolean {
    return state.isContactFormModalVisible;
  }

  constructor() {}

  @Action(SetIsMobile)
  setIsMobile(ctx: StateContext<AppStateModel>) {
    ctx.patchState({
      isMobile: true,
    });
  }

  @Action(SetIsContactFormModalVisible)
  setIsContactFormModalVisible(
    { getState, setState }: StateContext<AppStateModel>,
    action: SetIsContactFormModalVisible
  ) {
    const state = getState();
    setState({
      ...state,
      isContactFormModalVisible: action.payload,
    });
  }
}
