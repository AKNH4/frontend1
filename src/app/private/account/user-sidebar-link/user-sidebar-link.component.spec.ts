import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSidebarLinkComponent } from './user-sidebar-link.component';

describe('UserSidebarLinkComponent', () => {
  let component: UserSidebarLinkComponent;
  let fixture: ComponentFixture<UserSidebarLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSidebarLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSidebarLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
