import { HttpConnectionService } from './http-connection.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {

  constructor(private http: HttpConnectionService,
    ) { }
  Search(search, url) {
    const params = new HttpParams()
      .append('search', search);
       return this.http.get(url, params);
  }
}
