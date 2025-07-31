// src/app/components/register/register.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="onRegister()">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" [(ngModel)]="email" name="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" [(ngModel)]="password" name="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  `,
  styles: [],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onRegister() {
    try {
      await this.authService.register(this.email, this.password);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Registration error:', error);
    }
  }
}