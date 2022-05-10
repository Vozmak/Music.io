import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormField } from '../../../../core/interfaces/form-field';
import { Game } from '../../../../core/interfaces/game';
import { CreateGame } from '../../../../core/store/game/game.actions';
import { ProfileState } from '../../../../core/store/profile/profile.state';
import { startGameForm } from './start-game.form';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {

  public fields: FormField[] = startGameForm;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
  }

  public createGame(form: Game) {
    form.host = this.store.selectSnapshot(ProfileState.username)!;
    this.store.dispatch(new CreateGame(form))
      .subscribe(() => {
        console.log('success');
      })
  }

}
