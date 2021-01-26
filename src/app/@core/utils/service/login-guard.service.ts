import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardService implements CanActivateChild {
  constructor(private router: Router) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // console.log("anyyyyyyyy");
    // console.log(localStorage.getItem("tokenLogin"));

    if (localStorage.getItem('tokenLogin')) {
      this.router.navigate(['./projects']);
      // console.log(99999);
    }
    return true;
  }
}
