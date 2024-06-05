import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  userName: string = '';
  password: string = '';
  isLoggedIn: boolean;
  constructor(private authService: AuthService) {
    this.isLoggedIn = false;
  }
  logIn(userName: string, password: string): boolean {
    return this.authService.canLogin(userName, password);
    //localStorage.setItem('token','#')
  }
  logOut() {
    localStorage.removeItem('token');
  }
  isLogin(): void {
    this.isLoggedIn =! this.isLoggedIn;
  }

  get loginState():string {
    return `User is ${this.isLoggedIn ? 'logged in' : 'not logged out'}`;
  }
}
