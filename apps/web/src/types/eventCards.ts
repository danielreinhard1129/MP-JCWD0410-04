export interface EventCardProps {
  id: string;
  thumbnail: string;
  title: string;
  date: string;
  price: number;
}

export interface EventDetailProps {
  id: string;
  thumbnail: string;
  title: string;
  date: string;
  price: number;
  description: string;
}

export interface EventCard {
  id: string;
  title: string;
  desc: string;
  img: string;
  price: number;
  quota: number;
  available_seat: number;
  date: string;
  venueId: number;
  userId: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  user: { username: string };
}
