import { NgModule } from '@angular/core';
import { PublicRoutes } from './public.routing';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { LogoutComponent } from './components/logout/logout.component';
import { CoreModule } from '../core/core.module';

const components = [LoginComponent, SignUpComponent, LogoutComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, CoreModule],
  exports: [components],
})
export class PublicModule {}
