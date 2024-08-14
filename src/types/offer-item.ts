import { LocationModel } from './location';
import { CityModel } from './city';

export type OfferItemModel = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: CityModel;
  location: LocationModel;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};
