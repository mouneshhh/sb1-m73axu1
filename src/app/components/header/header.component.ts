import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <div class="container">
        <nav class="nav">
          <a routerLink="/" class="logo">Simple Booking</a>
          <div class="nav-links">
            <a routerLink="/hotels">Hotels</a>
            <ng-container *ngIf="auth.isAuthenticated(); else authButtons">
              <a routerLink="/bookings">My Bookings</a>
              <button (click)="auth.logout()" class="btn">Logout</button>
            </ng-container>
            <ng-template #authButtons>
              <a routerLink="/login" class="btn">Login</a>
              <a routerLink="/register" class="btn">Register</a>
            </ng-template>
          </div>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent {
  constructor(public auth: AuthService) {}
}