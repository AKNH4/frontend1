import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { WeatherRoutes } from './weather.routing';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material/material.module';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [WeatherWidgetComponent, WeatherComponent],
  imports: [CommonModule, WeatherRoutes, HttpClientModule, MaterialModule],
})
export class WeatherModule {}
