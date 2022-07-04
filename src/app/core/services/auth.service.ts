import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable, tap } from 'rxjs';
import { API_URL } from '../http/api_url.token';
import { LoginRes } from '../models/login.res';
import { User } from '../models/user.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private url: string,
    private jwtHelper: JwtHelperService,
    private userService: UserService
  ) {}

  login(username: string, password: string): Observable<LoginRes> {
    return this.http
      .post<LoginRes>(`${this.url}/user/login`, {
        username,
        password,
      })
      .pipe(
        tap((res: LoginRes) => {
          this.setToken(res.token);
        })
      );
  }

  logout() {
    this.removeToken();
  }

  isLoggedIn() {
    return (
      !!localStorage.getItem('token') &&
      !this.jwtHelper.isTokenExpired(localStorage.getItem('token') as string)
    );
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}
