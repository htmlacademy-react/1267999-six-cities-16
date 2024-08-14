import { UserType } from './user.ts';
import { CityType } from 'types/city.ts';
import { LocationType } from 'types/location.ts';

export type OfferDetailType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: UserType;
  images: string[];
  maxAdults: number;
};
