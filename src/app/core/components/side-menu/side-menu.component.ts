import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { sideMenu } from './side-menu'

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  public items: NbMenuItem[] = sideMenu;

  constructor() { }

  ngOnInit(): void {
  }

}
