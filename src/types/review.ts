import { UserModel } from 'types/user.ts';

export type ReviewModel = {
  id: string;
  date: Date;
  user: UserModel;
  comment: string;
  rating: number;
};
