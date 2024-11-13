import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hotel } from '../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private hotels: Hotel[] = [
    {
      id: 1,
      name: 'Raviz Ashtamudi',
      location: 'Kollam Backwaters',
      price: 8500,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      description: 'Luxury resort with stunning backwater views and ayurvedic spa.',
      amenities: ['Swimming Pool', 'Spa', 'Restaurant', 'WiFi', 'Parking', 'Gym'],
      rooms: [
        { id: 1, type: 'Deluxe Room', price: 8500, capacity: 2, available: true },
        { id: 2, type: 'Suite', price: 12000, capacity: 4, available: true }
      ]
    },
    {
      id: 2,
      name: 'Hotel Shah International',
      location: 'Kollam City',
      price: 2500,
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
      description: 'Central location with modern amenities and restaurant.',
      amenities: ['Restaurant', 'WiFi', 'Parking', 'Room Service'],
      rooms: [
        { id: 3, type: 'Standard Room', price: 2500, capacity: 2, available: true },
        { id: 4, type: 'Deluxe Room', price: 3500, capacity: 2, available: true }
      ]
    },
    {
      id: 3,
      name: 'Ashtamudi Lake Resort',
      location: 'Ashtamudi Lake',
      price: 6500,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
      description: 'Serene lakeside resort with traditional Kerala architecture.',
      amenities: ['Lake View', 'Ayurveda Center', 'Pool', 'Restaurant', 'WiFi'],
      rooms: [
        { id: 5, type: 'Lake View Room', price: 6500, capacity: 2, available: true },
        { id: 6, type: 'Premium Suite', price: 9500, capacity: 3, available: true }
      ]
    },
    {
      id: 4,
      name: 'Kollam Beach Resort',
      location: 'Kollam Beach',
      price: 4500,
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
      description: 'Beachfront property with stunning sunset views.',
      amenities: ['Private Beach', 'Beach Activities', 'Restaurant', 'Bar'],
      rooms: [
        { id: 7, type: 'Beach View Room', price: 4500, capacity: 2, available: true },
        { id: 8, type: 'Family Suite', price: 7500, capacity: 4, available: true }
      ]
    },
    {
      id: 5,
      name: 'Grand Thangassery Hotel',
      location: 'Thangassery',
      price: 3500,
      rating: 4.1,
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
      description: 'Historic location near the lighthouse with modern comforts.',
      amenities: ['Heritage Tours', 'Restaurant', 'WiFi', 'Conference Room'],
      rooms: [
        { id: 9, type: 'Classic Room', price: 3500, capacity: 2, available: true },
        { id: 10, type: 'Heritage Suite', price: 5500, capacity: 2, available: true }
      ]
    },
    {
      id: 6,
      name: 'Munroe Island Backwaters',
      location: 'Munroe Island',
      price: 7500,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      description: 'Exclusive island resort with private backwater cruises.',
      amenities: ['Backwater Cruises', 'Fishing', 'Restaurant', 'Spa'],
      rooms: [
        { id: 11, type: 'Water Villa', price: 7500, capacity: 2, available: true },
        { id: 12, type: 'Island Suite', price: 12500, capacity: 3, available: true }
      ]
    },
    {
      id: 7,
      name: 'Kollam City Center Hotel',
      location: 'RP Mall, Kollam',
      price: 3000,
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
      description: 'Modern city hotel with shopping mall access.',
      amenities: ['Mall Access', 'Gym', 'Restaurant', 'Business Center'],
      rooms: [
        { id: 13, type: 'City View Room', price: 3000, capacity: 2, available: true },
        { id: 14, type: 'Executive Suite', price: 4500, capacity: 2, available: true }
      ]
    },
    {
      id: 8,
      name: 'Ayurveda Palace',
      location: 'Asramam',
      price: 5500,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
      description: 'Wellness resort focusing on authentic Ayurvedic treatments.',
      amenities: ['Ayurveda Center', 'Yoga', 'Organic Restaurant', 'Meditation'],
      rooms: [
        { id: 15, type: 'Wellness Room', price: 5500, capacity: 2, available: true },
        { id: 16, type: 'Treatment Suite', price: 8500, capacity: 2, available: true }
      ]
    },
    {
      id: 9,
      name: 'Jatayu Nature Resort',
      location: 'Near Earth Center',
      price: 9500,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800&q=80',
      description: 'Luxury resort near the famous Jatayu Earth Center.',
      amenities: ['Adventure Sports', 'Infinity Pool', 'Multi-cuisine Restaurant'],
      rooms: [
        { id: 17, type: 'Mountain View Room', price: 9500, capacity: 2, available: true },
        { id: 18, type: 'Luxury Suite', price: 15000, capacity: 4, available: true }
      ]
    },
    {
      id: 10,
      name: 'Quilon Beach Hotel',
      location: 'Kollam Beach Road',
      price: 4000,
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
      description: 'Comfortable stay with beach access and water sports.',
      amenities: ['Water Sports', 'Beach Access', 'Restaurant', 'Bar'],
      rooms: [
        { id: 19, type: 'Sea View Room', price: 4000, capacity: 2, available: true },
        { id: 20, type: 'Beach Suite', price: 6000, capacity: 3, available: true }
      ]
    },
    {
      id: 11,
      name: 'Cashew Grove Resort',
      location: 'Cashew Plantations',
      price: 5000,
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
      description: 'Eco-friendly resort amidst cashew plantations.',
      amenities: ['Plantation Tours', 'Organic Farm', 'Pool', 'Restaurant'],
      rooms: [
        { id: 21, type: 'Garden Room', price: 5000, capacity: 2, available: true },
        { id: 22, type: 'Plantation Villa', price: 7500, capacity: 4, available: true }
      ]
    },
    {
      id: 12,
      name: 'Port City Marina',
      location: 'Port Area',
      price: 3800,
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
      description: 'Business hotel with harbor views and conference facilities.',
      amenities: ['Conference Center', 'Business Center', 'Restaurant'],
      rooms: [
        { id: 23, type: 'Harbor View Room', price: 3800, capacity: 2, available: true },
        { id: 24, type: 'Business Suite', price: 5500, capacity: 2, available: true }
      ]
    },
    {
      id: 13,
      name: 'Thevally Palace',
      location: 'Thevally',
      price: 6500,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
      description: 'Heritage property converted into luxury hotel.',
      amenities: ['Heritage Tours', 'Pool', 'Fine Dining', 'Spa'],
      rooms: [
        { id: 25, type: 'Heritage Room', price: 6500, capacity: 2, available: true },
        { id: 26, type: 'Royal Suite', price: 9500, capacity: 3, available: true }
      ]
    },
    {
      id: 14,
      name: 'Green Valley Resort',
      location: 'Thenmala Road',
      price: 4500,
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      description: 'Eco-resort surrounded by rubber plantations.',
      amenities: ['Nature Trails', 'Organic Farm', 'Restaurant', 'Yoga'],
      rooms: [
        { id: 27, type: 'Valley View Room', price: 4500, capacity: 2, available: true },
        { id: 28, type: 'Forest Suite', price: 6500, capacity: 4, available: true }
      ]
    },
    {
      id: 15,
      name: 'Kallada River Resort',
      location: 'Kallada Riverfront',
      price: 5500,
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
      description: 'Riverside resort with fishing and boating activities.',
      amenities: ['River Activities', 'Fishing', 'Restaurant', 'Garden'],
      rooms: [
        { id: 29, type: 'River View Room', price: 5500, capacity: 2, available: true },
        { id: 30, type: 'Riverside Suite', price: 7500, capacity: 3, available: true }
      ]
    }
  ];

  getHotels(): Observable<Hotel[]> {
    return of(this.hotels);
  }

  getHotelById(id: number): Observable<Hotel | undefined> {
    return of(this.hotels.find(hotel => hotel.id === id));
  }
}