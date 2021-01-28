import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../data/users';
import { HttpConnectionService } from './http-connection.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(null);
  private currentUser: Observable<User> = this._currentUserSubject.asObservable();
  constructor(
    private _httpConnectionService: HttpConnectionService,
    private router: Router,
  ) { }

  public get currentUserValue(): User {
    return this._currentUserSubject.value;
  }

  login() {

  }

  logout() {
    this._currentUserSubject.next(null);
    localStorage.clear();
    this.router.navigate(['auth/login']);
  }
}
