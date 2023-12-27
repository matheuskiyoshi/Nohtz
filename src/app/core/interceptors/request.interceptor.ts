import { AuthService } from './../auth/services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (
      request.url.includes('/login')
    ) {
      return next.handle(request);
    }

    const token = this.authService.getUserToken();

    if(token){
      const modifiedRequest = request.clone({
        setHeaders: {
          'auth-token': `${token}`,
        },
      });
      return next.handle(modifiedRequest);
    } else {
      this.router.navigate(['/login']);

      return next.handle(request);
    }

  }
}
