import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../data/users';
import { HttpConnectionService } from './http-connection.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(null);
  public currentUser: Observable<User> = this._currentUserSubject.asObservable();

  constructor(
    private _httpConnectionService: HttpConnectionService,
    private router: Router,
  ) {
    const userData = localStorage.getItem('AuthorizationData');
    if (userData) {
      this._currentUserSubject.next(JSON.parse(userData));
    }
  }

  public get currentUserValue(): User {
    return this._currentUserSubject.value;
  }

  public set currentUserValue(NewValue) {
    localStorage.setItem('classroomID', JSON.stringify(NewValue));
    this._currentUserSubject.next(NewValue);
  }


  login(username: string, password: string) {
    return this._httpConnectionService.post(`login`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('AuthorizationData', JSON.stringify(user.data));
        localStorage.setItem('satellizer_token', JSON.stringify(user.data.token));
        this._currentUserSubject.next(user ? user.data : user);
        return user;
      }));
  }


  logout() {
    this._currentUserSubject.next(null);
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }
}
