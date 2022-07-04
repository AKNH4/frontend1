import { Component, Input, OnInit } from '@angular/core';
import { UserSidebarService } from '../service/user-sidebar.service';

@Component({
  selector: 'app-user-sidebar-link',
  templateUrl: './user-sidebar-link.component.html',
  styleUrls: ['./user-sidebar-link.component.scss'],
})
export class UserSidebarLinkComponent implements OnInit {
  constructor(public sidebarService: UserSidebarService) {}

  @Input()
  path = '';

  @Input()
  describe = 'KONTONON';

  @Input()
  isToggler = false;

  toggleSidebar() {
    if (this.isToggler) {
      this.sidebarService.toggleExpand();
    }
  }

  ngOnInit(): void {}
}
