import { Component, OnInit } from '@angular/core';
import { NbRouteTab } from '@nebular/theme';
import { routeTabs } from './route-tabset';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public tabs: NbRouteTab[] = routeTabs;

  constructor() { }

  ngOnInit(): void {
  }

}
