import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbToastrModule,
  NbGlobalPhysicalPosition,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { CoreModule } from './core/core.module';
import { GameState } from './core/store/game/game.state';
import { ProfileState } from './core/store/profile/profile.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    CoreModule,
    NgxsModule.forRoot([ProfileState, GameState], {
      developmentMode: !environment.production,
    }),
    NgxsLoggerPluginModule.forRoot({
      // Do not collapse log groups
      collapsed: false,
      // Do not log in production mode
      disabled: environment.production,
    }),
    NbToastrModule.forRoot({
      position: NbGlobalPhysicalPosition.BOTTOM_RIGHT,
      status: 'basic',
      limit: 3
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
