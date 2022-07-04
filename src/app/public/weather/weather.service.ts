import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { API_URL } from 'src/app/core/http/api_url.token';
import { Weather } from './weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient, @Inject(API_URL) private url: string) {}

  loadWeather(): Observable<Weather> {
    return this.http.get<Weather>(`${this.url}/weather`).pipe(shareReplay());
  }
}
