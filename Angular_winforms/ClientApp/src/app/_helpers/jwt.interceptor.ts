import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log(request);
    let token = localStorage.getItem('token');
    if (token) {
      request = request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    }
    if (request.method === 'GET') {
      request = request.clone({
        setHeaders: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
      });
    }
    //console.log(request);
    return next.handle(request);
  }
}
