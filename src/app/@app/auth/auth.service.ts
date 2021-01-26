import { HttpConnectionService } from './../../@core/utils/http-connection.service';
import { Injectable } from '@angular/core';
HttpConnectionService
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor (private http: HttpConnectionService) { }
  adduser(url, body) {
    return this.http.post(url, body)
  }
}
