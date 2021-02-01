import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(
    private router: Router,
    private _authService: AuthService,
  ) { }

  canLoad(
    route: Route,
    segments: UrlSegment[],
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this._authService.currentUserValue;
    if (currentUser) {
      if (segments[0].path === 'auth') this.router.navigate(['projects']);

      // logged in so return true
      return true;
    }

    this.router.navigate(['auth/login'], { queryParams: { returnUrl: route.path } });
    return false;
  }
}
