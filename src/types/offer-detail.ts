import { UserModel } from './user.ts';
import { CityModel } from 'types/city.ts';
import { LocationModel } from 'types/location.ts';

export type OfferDetailModel = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityModel;
  location: LocationModel;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: UserModel;
  images: string[];
  maxAdults: number;
};
