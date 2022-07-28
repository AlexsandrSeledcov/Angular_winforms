/*
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { DataService } from "../_services/data.service.ts";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
//import { AuthService } from "../_services/auth.service";
import { Router, RouterStateSnapshot, ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
 // constructor(private authService: AuthService, private router: Router) { };
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status == 401) {
        //this.authService.logout();
        //this.router.navigate([location.pathname]);
      }
      //console.log(err);
      //const error = err.message || err.error || err.statusText;
      return throwError(err.error);
    }))
  }
}
*/
