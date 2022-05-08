import { Component } from '@angular/core';
import { NbSidebarState } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-io';

  public sidebarState: NbSidebarState = 'compacted';

  changeSideState(eventType: string): void {
    eventType === 'mouseover' ?
      this.sidebarState = 'expanded' :
      this.sidebarState = 'compacted';

  }
}
