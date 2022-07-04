import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Weather } from '../weather.interface';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit {
  constructor() {}
  @Input() weather!: Weather;
  @Output() onRefresh = new EventEmitter();
  refresh() {
    this.onRefresh.emit();
  }
  ngOnInit(): void {}
}
