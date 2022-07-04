import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { UserSidebarLinkComponent } from './user-sidebar-link/user-sidebar-link.component';

@NgModule({
  declarations: [AccountComponent, ChangePasswordComponent, UserSidebarComponent, UserSidebarLinkComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
  ],
})
export class AccountModule {}
