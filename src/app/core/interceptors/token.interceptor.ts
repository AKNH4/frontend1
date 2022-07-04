import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  authService = inject(AuthService);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.authService.isLoggedIn()) {
      const clonedReq = request.clone({
        headers: request.headers.set(
          'Authorization',
          'Bearer ' + localStorage.getItem('token')
        ),
      });
      return next
        .handle(clonedReq)
        .pipe
        // catchError((error) => {
        //   if (error.status === 401) {
        //     this.authService.logout();
        //   }
        //   return throwError(() => new Error(''));
        // })
        ();
    }
    return next.handle(request);
  }
}
