import { CityNameModel } from 'types/city-name.ts';
import { OfferItemModel } from 'types/offer-item.ts';
import { RequestStatus } from '../const/const.ts';

export type OffersStateModel = {
  city: CityNameModel;
  offers: OfferItemModel[];
  sort: number;
  status: RequestStatus;
};
