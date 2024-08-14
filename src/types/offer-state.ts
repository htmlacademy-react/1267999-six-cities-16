import { CityNameType } from 'types/city-name.ts';
import { OfferItemType } from 'types/offer-item.ts';
import { RequestStatus } from '../const/const.ts';

export type TOffersState = {
  city: CityNameType;
  offers: OfferItemType[];
  sort: number;
  status: RequestStatus;
};
