import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (localStorage.getItem('tokenUser') !== null && request.url.includes('http://localhost:8080')) {

      const token = `${localStorage.getItem('tokenUser')}`
      request = request.clone({
        setHeaders: {
          'Authorization': token,
        }
      })

    }

    return next.handle(request);
  }
}
