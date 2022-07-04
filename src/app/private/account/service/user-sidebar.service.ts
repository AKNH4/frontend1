import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserSidebarService {
  constructor() {}

  expanded = new BehaviorSubject<boolean>(false);

  toggleExpand() {
    this.expanded.next(!this.expanded.getValue());
  }
}
