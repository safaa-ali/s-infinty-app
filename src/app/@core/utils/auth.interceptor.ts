import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const helper = new JwtHelperService();
    const currentUser = this._authService.currentUserValue;

    if (currentUser && currentUser.token) {

      if (helper.isTokenExpired(currentUser.token)) this._authService.logout();

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${currentUser.token}`,
      });
      const reqWithTokenHeader = req.clone({ headers });
      return next.handle(reqWithTokenHeader);
    }

    return next.handle(req);
  }
}
