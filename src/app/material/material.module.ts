import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

const materials = [
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
];

@NgModule({
  imports: [CommonModule, materials],
  exports: [materials],
})
export class MaterialModule {}
