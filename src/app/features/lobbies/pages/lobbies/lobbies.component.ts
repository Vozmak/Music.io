import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbRouteTab } from '@nebular/theme';
import { lobbiesRoutes } from './lobbies-routes';

@Component({
  selector: 'app-lobbies',
  templateUrl: './lobbies.component.html',
  styleUrls: ['./lobbies.component.scss']
})
export class LobbiesComponent implements OnInit {

  public lobbies: NbRouteTab[] = lobbiesRoutes;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.router.navigate(['rooms'], { relativeTo: this.route });
  }

}
