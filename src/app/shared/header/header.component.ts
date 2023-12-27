import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  constructor(private authService: AuthService) { }

  isUserLoggedIn(): boolean {
    return !!this.authService.getUserToken();
  }

  logout(): void {
    this.authService.logout();
  }

}
