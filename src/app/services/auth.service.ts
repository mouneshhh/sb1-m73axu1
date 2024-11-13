import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();
  private users: User[] = [];

  register(user: User): boolean {
    if (this.users.find(u => u.email === user.email)) {
      return false;
    }
    this.users.push(user);
    this.currentUserSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
    return true;
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUserSubject.next(user);
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    this.currentUserSubject.next(null);
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }
}