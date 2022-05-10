import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { ApiService } from '../../services/api.service';
import { StateHelper } from '../state-helper';
import { CreateGame } from './game.actions';

export interface GameStateModel {
  actualGameId: string | null;
}

@State<GameStateModel>({
  name: GameState.stateName,
  defaults: GameState.getStateValue(),
})
@Injectable()
export class GameState extends StateHelper<GameStateModel> {
  public static stateName = 'GameState';

  constructor(private apiService: ApiService) {
    super(GameState.stateName);
  }

  @Action(CreateGame)
  async createGame(context: StateContext<GameStateModel>, { game }: CreateGame) {
    const { patchState } = context;
    try {
      this.apiService.createGame(game)
        .subscribe((res) => {
          patchState({ actualGameId: res.gameId });
          this.saveStateToLS(context);
        });
    } catch (error) {
      console.log(error);
    }
  }

  public static getStateValue(): GameStateModel {
    try {
      return StateHelper.getStateFromLS<GameStateModel>(GameState.stateName)
    } catch (error) {
      return {
        actualGameId: null,
      }
    }
  }
}
