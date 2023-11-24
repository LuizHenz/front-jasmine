import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthTokenService } from '../shared/auth-token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor{

  constructor() { }

  authToken = inject(AuthTokenService);


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authToken.getToken();

    if (authToken) {
      const authReq = req.clone({
        // setHeaders:{'Authorization': authToken}
        headers: req.headers.set('Authorization', authToken)
      });

      return next.handle(authReq);
    } else {
      return next.handle(req);
    }

  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorService, multi: true }
];
