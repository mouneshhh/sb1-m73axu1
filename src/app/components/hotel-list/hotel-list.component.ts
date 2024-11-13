import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HotelService } from '../../services/hotel.service';
import { Hotel } from '../../models/hotel.model';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="container">
      <div class="search-box">
        <input 
          [(ngModel)]="searchTerm" 
          placeholder="Search hotels..."
          (input)="filterHotels()"
        >
        <select [(ngModel)]="priceFilter" (change)="filterHotels()">
          <option value="all">All Prices</option>
          <option value="low">Below ₹2000</option>
          <option value="medium">₹2000 - ₹5000</option>
          <option value="high">Above ₹5000</option>
        </select>
      </div>

      <div class="hotels-list">
        <div *ngFor="let hotel of filteredHotels" class="hotel-card">
          <img [src]="hotel.image" [alt]="hotel.name" class="hotel-image">
          <div class="hotel-info">
            <h2>{{hotel.name}}</h2>
            <p>{{hotel.location}}</p>
            <p>{{hotel.description}}</p>
            <div class="amenities">
              <span *ngFor="let amenity of hotel.amenities" class="amenity-tag">
                {{amenity}}
              </span>
            </div>
            <div class="hotel-footer">
              <span class="rating">Rating: {{hotel.rating}}/5</span>
              <p class="price">Starting from ₹{{hotel.price}} per night</p>
              <a [routerLink]="['/hotels', hotel.id]" class="btn">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[] = [];
  filteredHotels: Hotel[] = [];
  searchTerm: string = '';
  priceFilter: string = 'all';

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.hotelService.getHotels().subscribe(hotels => {
      this.hotels = hotels;
      this.filteredHotels = hotels;
    });
  }

  filterHotels() {
    this.filteredHotels = this.hotels.filter(hotel => {
      const matchesSearch = hotel.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          hotel.location.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      let matchesPrice = true;
      if (this.priceFilter === 'low') {
        matchesPrice = hotel.price < 2000;
      } else if (this.priceFilter === 'medium') {
        matchesPrice = hotel.price >= 2000 && hotel.price <= 5000;
      } else if (this.priceFilter === 'high') {
        matchesPrice = hotel.price > 5000;
      }

      return matchesSearch && matchesPrice;
    });
  }
}