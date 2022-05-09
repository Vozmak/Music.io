import { Component, OnInit } from '@angular/core';
import { FormField } from '../../../../core/interfaces/form-field';
import { startGameForm } from './start-game.form';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {

  public fields: FormField[] = startGameForm;

  constructor() { }

  ngOnInit(): void {
  }

}
