import { FavoriteStatus } from '../const/const.ts';

export type FavoriteStatusModel =
  (typeof FavoriteStatus)[keyof typeof FavoriteStatus];
