import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <div class="login-form">
        <h2>Register</h2>
        <form (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="name">Full Name:</label>
            <input 
              type="text" 
              id="name" 
              [(ngModel)]="user.name" 
              name="name" 
              required
            >
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              [(ngModel)]="user.email" 
              name="email" 
              required
            >
          </div>
          <div class="form-group">
            <label for="phone">Phone:</label>
            <input 
              type="tel" 
              id="phone" 
              [(ngModel)]="user.phone" 
              name="phone"
            >
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              [(ngModel)]="user.password" 
              name="password" 
              required
            >
          </div>
          <button type="submit" class="btn">Register</button>
          <p class="mt-4 text-center">
            Already have an account? <a routerLink="/login">Login here</a>
          </p>
        </form>
      </div>
    </div>
  `
})
export class RegisterComponent {
  user: User = {
    id: Math.random().toString(36).substr(2, 9),
    email: '',
    name: '',
    phone: '',
    password: ''
  };

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.auth.register(this.user)) {
      this.router.navigate(['/hotels']);
    } else {
      alert('Email already exists!');
    }
  }
}