export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  password?: string;
  bookings?: number[];
}