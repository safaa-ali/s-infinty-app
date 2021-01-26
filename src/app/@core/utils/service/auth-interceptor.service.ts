import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService  implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const userData = localStorage.getItem('tokenLogin');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${userData}`,

    });
    const req1 = httpRequest.clone({ headers });

    // console.log(userData);
    // console.log(httpRequest);
    // console.log(req1);


    return next.handle(req1);
  }
}
