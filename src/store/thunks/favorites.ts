import { createAsyncThunk } from '@reduxjs/toolkit';
import { OfferItemModel } from 'types/offer-item.ts';
import { AxiosInstance } from 'axios';
import { EndPoint, ErrorToast, FavoriteStatusCode } from 'const/const.ts';
import { FavoriteStatusModel } from 'types/favorite-status.ts';
import { offersAction } from 'store/slices/offers.ts';
import { toast } from 'react-toastify';

type ChangeProps = {
  offerId: string;
  status: FavoriteStatusModel;
};

type ChangeResponse = {
  offer: OfferItemModel;
  status: FavoriteStatusModel;
};

const fetchFavorites = createAsyncThunk<
  OfferItemModel[],
  undefined,
  { extra: AxiosInstance }
>('favorite/fetchAll', async (_arg, { extra: api }) => {
  try {
    const response = await api.get<OfferItemModel[]>(EndPoint.Favorite);

    return response.data;
  } catch (error) {
    toast.error(ErrorToast.FetchFavorites);
    throw error;
  }
});

const changeFavorite = createAsyncThunk<
  ChangeResponse,
  ChangeProps,
  { extra: AxiosInstance }
>('favorite/change', async ({ offerId, status }, { extra: api, dispatch }) => {
  try {
    const response = await api.post<OfferItemModel>(
      `${EndPoint.Favorite}/${offerId}/${status}`,
    );

    if (
      [FavoriteStatusCode.AddedOk, FavoriteStatusCode.RemovedOk].includes(
        response.status,
      )
    ) {
      dispatch(offersAction.updateOffer(response.data));
    }
    return { offer: response.data, status };
  } catch (error) {
    toast.error(ErrorToast.ChangeFavorite);
    throw error;
  }
});

export { changeFavorite, fetchFavorites };
