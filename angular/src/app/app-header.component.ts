import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'cp-app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  private key = 'cp-public-name';


  constructor(private router: Router) {
  }

  isAuthenticated() {
    return !!this.getName();
  }

  getName() {
    return localStorage.getItem(this.key);
  }

  logout() {
    localStorage.removeItem(this.key);
    this.router.navigate(['/authentication/login'])
  }
}
