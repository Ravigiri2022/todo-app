import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  router = inject(Router);
  onLogin() {
    this.router.navigateByUrl('dashboard');
  }
  onSignup() {
    this.router.navigateByUrl('auth/signup');
  }
}
