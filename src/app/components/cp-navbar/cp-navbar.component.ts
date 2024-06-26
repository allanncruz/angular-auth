import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'cp-navbar',
  templateUrl: './cp-navbar.component.html',
  styleUrls: ['./cp-navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen: boolean = false;

  constructor(public auth: AuthService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleCloseMenu() {
    this.isMenuOpen = false;
  }
}
