import { trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserSidebarService } from '../service/user-sidebar.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss'],
  animations: [],
})
export class UserSidebarComponent implements OnInit {
  constructor(public sidebarService: UserSidebarService) {}

  ngOnInit(): void {}
}
