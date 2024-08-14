import { createAsyncThunk } from '@reduxjs/toolkit';
import { ReviewType } from 'types/review.ts';
import { OfferDetailType } from 'types/offer-detail.ts';
import { AxiosInstance } from 'axios';
import { EndPoint, ErrorToast } from 'const/const.ts';
import { toast } from 'react-toastify';

type PostCommentProps = {
  body: {
    comment: string;
    rating: number;
  };
  offerId: OfferDetailType['id'];
};

const fetchComments = createAsyncThunk<
  ReviewType[],
  OfferDetailType['id'],
  { extra: AxiosInstance }
>('comments/fetch', async (offerId, { extra: api }) => {
  try {
    const response = await api.get<ReviewType[]>(
      `${EndPoint.Comments}/${offerId}`,
    );

    return response.data;
  } catch (error) {
    toast.error(ErrorToast.FetchComments);
    throw error;
  }
});

const postComment = createAsyncThunk<
  ReviewType,
  PostCommentProps,
  { extra: AxiosInstance }
>('comments/post', async ({ body, offerId }, { extra: api }) => {
  try {
    const response = await api.post<ReviewType>(
      `${EndPoint.Comments}/${offerId}`,
      body,
    );

    return response.data;
  } catch (error) {
    toast.error(ErrorToast.PostComments);
    throw error;
  }
});

export { fetchComments, postComment };
