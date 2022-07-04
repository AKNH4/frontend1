import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { LogoutGuard } from '../core/guards/logout.guard';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {
    path: 'weather',
    loadChildren: () =>
      import('./weather/weather.module').then((m) => m.WeatherModule),
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
    canActivate: [LogoutGuard],
  },
  {
    path: 'logout',
    component: LogoutComponent,
    title: 'Logout',
    canActivate: [AuthGuard],
  },
];

export const PublicRoutes = RouterModule.forChild(routes);
