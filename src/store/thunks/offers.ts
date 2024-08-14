import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferItemType } from 'types/offer-item.ts';
import { AxiosInstance } from 'axios';
import { EndPoint, ErrorToast } from 'const/const.ts';
import { OfferDetailType } from 'types/offer-detail.ts';
import { toast } from 'react-toastify';

const fetchAllOffers = createAsyncThunk<
  OfferItemType[],
  void,
  { extra: AxiosInstance }
>('fetchOffers/all', async (_arg, { extra: api }) => {
  try {
    const response = await api.get<OfferItemType[]>(EndPoint.Offers);
    return response.data;
  } catch (err) {
    toast.error(ErrorToast.FetchAllOffers);
    throw err;
  }
});

const fetchOffer = createAsyncThunk<
  OfferDetailType,
  string,
  { extra: AxiosInstance }
>('fetchOffers/one', async (offerID, { extra: api }) => {
  try {
    const response = await api.get<OfferDetailType>(
      `${EndPoint.Offers}/${offerID}`,
    );

    return response.data;
  } catch (error) {
    toast.error(ErrorToast.FetchOffer);
    throw error;
  }
});

const fetchNearOffers = createAsyncThunk<
  OfferItemType[],
  string,
  { extra: AxiosInstance }
>('fetchOffers/near', async (offerId, { extra: api }) => {
  try {
    const response = await api.get<OfferItemType[]>(
      `${EndPoint.Offers}/${offerId}${EndPoint.Nearby}`,
    );

    return response.data;
  } catch (error) {
    toast.error(ErrorToast.FetchNearOffers);
    throw error;
  }
});

export { fetchAllOffers, fetchOffer, fetchNearOffers };
