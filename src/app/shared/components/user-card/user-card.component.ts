import { Component, Input, OnInit } from '@angular/core';
import { NbComponentShape, NbComponentSize } from '@nebular/theme';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() onlyPicture: boolean = false;
  @Input() picture: string | null;
  @Input() defaultPicture: string = 'https://www.pngitem.com/pimgs/m/568-5680607_orange-anime-icon-hd-png-download.png';
  @Input() size: NbComponentSize = 'giant';
  @Input() color: string;
  @Input() title: string;
  @Input() name: string;
  @Input() shape: NbComponentShape = 'round';

  constructor() { }

  ngOnInit(): void {
  }

}
