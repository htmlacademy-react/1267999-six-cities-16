import { createAsyncThunk } from '@reduxjs/toolkit';
import { ReviewModel } from 'types/review.ts';
import { OfferDetailModel } from 'types/offer-detail.ts';
import { AxiosInstance } from 'axios';
import { EndPoint, ErrorToast } from 'const/const.ts';
import { toast } from 'react-toastify';

type PostCommentProps = {
  body: {
    comment: string;
    rating: number;
  };
  offerId: OfferDetailModel['id'];
};

const fetchComments = createAsyncThunk<
  ReviewModel[],
  OfferDetailModel['id'],
  { extra: AxiosInstance }
>('comments/fetch', async (offerId, { extra: api }) => {
  try {
    const response = await api.get<ReviewModel[]>(
      `${EndPoint.Comments}/${offerId}`,
    );

    return response.data;
  } catch (error) {
    toast.error(ErrorToast.FetchComments);
    throw error;
  }
});

const postComment = createAsyncThunk<
  ReviewModel,
  PostCommentProps,
  { extra: AxiosInstance }
>('comments/post', async ({ body, offerId }, { extra: api }) => {
  try {
    const response = await api.post<ReviewModel>(
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
