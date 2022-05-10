import { Game } from '../../interfaces/game';

export class CreateGame {
  static readonly type = '[Game] Create Game';
  constructor(public game: Game) {
  }
}
