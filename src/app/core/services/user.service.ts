import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { API_URL } from '../http/api_url.token';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private url: string,
    private jwtHelper: JwtHelperService
  ) {}

  currentUser$ = new BehaviorSubject<User | null>(null);

  getUser() {
    return this.http
      .get<User>(`${this.url}/user/data`)
      .pipe(map((user: User) => this.currentUser$.next(user)));
  }

  changePassword(password: string): Observable<any> {
    return this.http.post<any>(`${this.url}/user/change-password`, {
      password,
    });
  }
}
