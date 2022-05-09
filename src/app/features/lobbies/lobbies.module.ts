import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbRouteTabsetModule } from '@nebular/theme';
import { SharedModule } from '../../shared/shared.module';

import { LobbiesRoutingModule } from './lobbies-routing.module';
import { LobbiesComponent } from './pages/lobbies/lobbies.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { StartGameComponent } from './pages/start-game/start-game.component';
import { ActualGameComponent } from './pages/actual-game/actual-game.component';


@NgModule({
  declarations: [
    LobbiesComponent,
    RoomsComponent,
    StartGameComponent,
    ActualGameComponent
  ],
  imports: [
    CommonModule,
    LobbiesRoutingModule,
    NbCardModule,
    NbRouteTabsetModule,
    SharedModule,
  ],
})
export class LobbiesModule { }
