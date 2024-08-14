import { FavoriteStatus } from '../const/const.ts';

export type FavoriteStatusType =
  (typeof FavoriteStatus)[keyof typeof FavoriteStatus];
