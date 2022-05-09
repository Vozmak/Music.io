import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualGameComponent } from './pages/actual-game/actual-game.component';
import { LobbiesComponent } from './pages/lobbies/lobbies.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { StartGameComponent } from './pages/start-game/start-game.component';

const routes: Routes = [
  {
    path: '',
    component: LobbiesComponent,
    children: [
      {
        path: 'rooms',
        component: RoomsComponent,
      },
      {
        path: 'start',
        component: StartGameComponent,
      },
      {
        path: 'game',
        component: ActualGameComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LobbiesRoutingModule { }
