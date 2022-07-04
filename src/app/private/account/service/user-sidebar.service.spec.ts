import { TestBed } from '@angular/core/testing';

import { UserSidebarService } from './user-sidebar.service';

describe('UserSidebarService', () => {
  let service: UserSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
