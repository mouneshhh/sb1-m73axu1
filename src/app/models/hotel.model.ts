export interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  amenities: string[];
  rooms: Room[];
}

export interface Room {
  id: number;
  type: string;
  price: number;
  capacity: number;
  available: boolean;
}

export interface Booking {
  id: number;
  hotelId: number;
  roomId: number;
  userId: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}