import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { NavProfileComponent } from './components/nav-profile/nav-profile.component';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { MaterialModule } from '../material/material.module';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ContainerComponent } from './components/container/container.component';

const components = [
  NavbarComponent,
  NavLinkComponent,
  NavProfileComponent,
  LoadingSpinnerComponent,
  ContainerComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule, HttpClientModule, MaterialModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: JWT_OPTIONS,
      useValue: JWT_OPTIONS,
    },
    JwtHelperService,
  ],
  exports: [components],
})
export class CoreModule {}
