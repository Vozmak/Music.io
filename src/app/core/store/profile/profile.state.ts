import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { StateHelper } from '../state-helper';
import { SetImage, SetName } from './profile.actions';

export interface ProfileStateModel {
  username: string | null;
  image: string | null;
}

@State<ProfileStateModel>({
  name: ProfileState.stateName,
  defaults: ProfileState.getStateValue(),
})
@Injectable()
export class ProfileState extends StateHelper<ProfileStateModel>{
  public static stateName = 'ProfileState'

  constructor() {
    super(ProfileState.stateName);
  }

  @Selector()
  static user(state: ProfileStateModel): ProfileStateModel {
    return state;
  }

  @Selector()
  static username(state: ProfileStateModel): string | null {
    return state.username;
  }

  @Selector()
  static image(state: ProfileStateModel): string | null {
    return state.image;
  }

  @Action(SetName)
  setName(context: StateContext<ProfileStateModel>, { username }: SetName) {
    const { patchState } = context;
    patchState({
      username
    });

    this.saveStateToLS(context);
  }

  @Action(SetImage)
  setImage(context: StateContext<ProfileStateModel>, { image }: SetImage) {
    const { patchState } = context;
    patchState({
      image
    });

    this.saveStateToLS(context);
  }

  public static getStateValue(): ProfileStateModel {
    try {
      return StateHelper.getStateFromLS<ProfileStateModel>(ProfileState.stateName)
    } catch (error) {
      return {
        username: null,
        image: null,
      }
    }
  }
}
