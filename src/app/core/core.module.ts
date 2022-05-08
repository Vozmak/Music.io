import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbMenuModule } from '@nebular/theme';
import { SideMenuComponent } from './components/side-menu/side-menu.component';



@NgModule({
  declarations: [
    SideMenuComponent,
  ],
  exports: [
    SideMenuComponent,
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbMenuModule.forRoot(),
  ],
})
export class CoreModule { }
