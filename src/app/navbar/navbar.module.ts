import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { RouterModule } from '@angular/router';

const components = [NavbarComponent, NavLinkComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule],
  exports: [components],
})
export class NavbarModule {}
