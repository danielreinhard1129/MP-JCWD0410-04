export interface EventCardProps {
  id: string;
  img: string;
  title: string;
  startDate: string;
  endDate: string;
  price: number;
}

export interface EventDetailProps {
  id: string;
  img: string;
  title: string;
  startDate: string;
  endDate: string;
  price: number;
  description: string;
  location: string;
  user: { username: string };
}

export interface EventCard {
  id: string;
  title: string;
  desc: string;
  img: string;
  price: number;
  quota: number;
  availableSeat: number;
  startDate: string;
  endDate: string;
  location: string;
  userId: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  user: { username: string };
}
