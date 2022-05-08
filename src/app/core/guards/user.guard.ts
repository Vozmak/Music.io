import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ToastrService } from '../services/toastr.service';
import { ProfileState } from '../store/profile/profile.state';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private store: Store,
    private router: Router,
    private toastrService: ToastrService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = this.store.selectSnapshot(ProfileState.user);
    if (user?.username) {
      return true;
    }
    this.toastrService.showWarningToastr({ message: 'After look profile, register please.' });
    return this.router.createUrlTree([`profile/register`]);
  }

}
