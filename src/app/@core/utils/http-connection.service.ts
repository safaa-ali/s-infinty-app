import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from './toastr.service';

@Injectable({
  providedIn: 'root',
})
export class HttpConnectionService {

  apiUrlPrefix = environment.apiUrlPrefix;

  constructor(
    private _http: HttpClient,
    private _toastrService: ToastrService,
  ) { }

  post(url: string, body: any, options?): Observable<any> {
    const fullUrl: string = this.apiUrlPrefix + url;
    return this._http.post(fullUrl, body, options);
  }

  get(url: string, params?: HttpParams): Observable<any> {
    const fullUrl: string = this.apiUrlPrefix + url;
    const opts = params ? { params: params } : {};
    return this._http.get(fullUrl, opts);
  }

  download(url: string): Observable<any> {
    const fullUrl: string = this.apiUrlPrefix + url;
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this._http.get(fullUrl, { headers: headers, responseType: 'blob' });
  }

  put(url: string, body: any, options?): Observable<any> {
    const fullUrl: string = this.apiUrlPrefix + url;
    return this._http.put(fullUrl, body);
  }

  delete(url: string, options?): Observable<any> {
    const fullUrl: string = this.apiUrlPrefix + url;
    return this._http.delete(fullUrl);
  }

  errorHandler(error) {
    this._toastrService.showTranslatedToast('danger', error.error.errorMessage, 'something-went-wrong');
    return throwError(error);
  }
}
