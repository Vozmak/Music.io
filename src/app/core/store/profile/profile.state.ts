import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { StateHelper } from '../state-helper';
import { SaveImage, SaveName } from './profile.actions';

export interface ProfileStateModel {
  name: string | null;
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

  @Action(SaveName)
  saveName(context: StateContext<ProfileStateModel>, { name }: SaveName) {
    const { patchState } = context
    patchState({
      name
    });

    this.saveStateToLS(context);
  }

  @Action(SaveImage)
  saveImage(context: StateContext<ProfileStateModel>, { image }: SaveImage) {
    const { patchState } = context
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
        name: null,
        image: null,
      }
    }
  }
}
