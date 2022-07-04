import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-profile',
  templateUrl: './nav-profile.component.html',
  styleUrls: ['./nav-profile.component.scss'],
})
export class NavProfileComponent implements OnInit {
  constructor() {}

  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  ngOnInit(): void {}
}
