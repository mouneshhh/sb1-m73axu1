import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HotelService } from '../../services/hotel.service';
import { AuthService } from '../../services/auth.service';
import { Hotel, Room } from '../../models/hotel.model';
import { format } from 'date-fns';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="container" *ngIf="hotel">
      <div class="hotel-detail">
        <img [src]="hotel.image" [alt]="hotel.name" class="hotel-main-image">
        
        <div class="hotel-info">
          <h1>{{hotel.name}}</h1>
          <p class="location">{{hotel.location}}</p>
          <div class="rating">Rating: {{hotel.rating}}/5</div>
          
          <div class="amenities">
            <h3>Amenities</h3>
            <div class="amenity-list">
              <span *ngFor="let amenity of hotel.amenities" class="amenity-tag">
                {{amenity}}
              </span>
            </div>
          </div>

          <div class="booking-section" *ngIf="auth.isAuthenticated()">
            <h3>Book Your Stay</h3>
            <div class="booking-form">
              <div class="form-group">
                <label>Check-in Date:</label>
                <input type="date" [(ngModel)]="checkIn" [min]="today">
              </div>
              <div class="form-group">
                <label>Check-out Date:</label>
                <input type="date" [(ngModel)]="checkOut" [min]="checkIn">
              </div>
              <div class="form-group">
                <label>Room Type:</label>
                <select [(ngModel)]="selectedRoom">
                  <option [ngValue]="null">Select a room</option>
                  <option *ngFor="let room of hotel.rooms" [ngValue]="room">
                    {{room.type}} - ₹{{room.price}}/night ({{room.capacity}} guests)
                  </option>
                </select>
              </div>
              <button class="btn" (click)="bookRoom()" [disabled]="!canBook">
                Book Now
              </button>
            </div>
          </div>
          
          <div class="login-prompt" *ngIf="!auth.isAuthenticated()">
            <p>Please <a routerLink="/login">login</a> to book a room.</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HotelDetailComponent implements OnInit {
  hotel?: Hotel;
  checkIn: string = '';
  checkOut: string = '';
  selectedRoom: Room | null = null;
  today = format(new Date(), 'yyyy-MM-dd');

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    public auth: AuthService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hotelService.getHotelById(id).subscribe(hotel => {
      this.hotel = hotel;
    });
  }

  get canBook(): boolean {
    return !!(this.checkIn && this.checkOut && this.selectedRoom);
  }

  bookRoom() {
    if (!this.canBook) return;
    
    // In a real app, this would make an API call to create a booking
    alert(`Booking confirmed!\n
      Hotel: ${this.hotel?.name}\n
      Room: ${this.selectedRoom?.type}\n
      Check-in: ${this.checkIn}\n
      Check-out: ${this.checkOut}\n
      Total: ₹${this.selectedRoom?.price}`);
  }
}