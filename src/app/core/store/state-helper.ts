import { StateContext } from '@ngxs/store';

export class StateHelper<Model> {
  constructor(private stateName: string) {
  }

  protected saveStateToLS(stateContext: StateContext<Model>): void {
    const state = stateContext.getState();
    localStorage.setItem(this.stateName, JSON.stringify(state));
  }

  public static getStateFromLS<Model>(stateName: string): Model {
    const state = localStorage.getItem(stateName);
    if (!state) {
      throw Error(`Couldn't get saved state value.`);
    }
    return JSON.parse(state);
  }
}
