import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbRouteTab } from '@nebular/theme';
import { routeTabs } from './route-tabset';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public tabs: NbRouteTab[] = routeTabs;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.navigate(['general'], { relativeTo: this.route });
  }

}
