import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbCardModule, NbRouteTabsetModule } from '@nebular/theme';
import { GeneralComponent } from './pages/general/general.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { StatsComponent } from './pages/stats/stats.component';

import { ProfileRoutingModule } from './profile-routing.module';


@NgModule({
  declarations: [
    ProfileComponent,
    GeneralComponent,
    RegisterComponent,
    StatsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NbRouteTabsetModule,
    NbCardModule,
  ],
})
export class ProfileModule { }
