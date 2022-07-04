import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [{ path: '', component: WeatherComponent }];

export const WeatherRoutes = RouterModule.forChild(routes);
