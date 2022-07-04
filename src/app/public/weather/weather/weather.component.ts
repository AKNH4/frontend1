import { Component, OnInit } from '@angular/core';
import { shareReplay } from 'rxjs';
import { Weather } from '../weather.interface';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  weather!: Weather;
  loadData() {
    this.weatherService
      .loadWeather()
      // .pipe(shareReplay())
      .subscribe({
        next: (weather: Weather) => {
          this.weather = weather;
        },
      });
  }

  ngOnInit(): void {
    this.loadData();
  }
}
