import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
fixApiUrl = 'https://mot-dev-backend.s-infinity-d.com/api/';
  constructor(private http: HttpClient) { }

  getToken(url, body?) {

    return  this.http.post(this.fixApiUrl + url, body);
  }
  getData(url) {

    return  this.http.get(this.fixApiUrl + url);
  }
}
