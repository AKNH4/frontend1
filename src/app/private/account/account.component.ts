import { Component, ContentChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  constructor(public userService: UserService, public route: ActivatedRoute) {}

  // @ContentChild('sidebar')
  // sidebar!: UserSidebarComponent;

  get win(): Window {
    return window;
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe();
  }
}
