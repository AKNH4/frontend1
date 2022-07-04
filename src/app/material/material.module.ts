import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const materials = [
  MatOptionModule,
  MatIconModule,
  MatButtonModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatMenuModule,
  MatSidenavModule,
  MatInputModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
];

@NgModule({
  imports: [CommonModule, materials],
  exports: [materials],
})
export class MaterialModule {}
