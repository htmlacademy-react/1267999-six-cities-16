import { UserType } from 'types/user.ts';

export type ReviewType = {
  id: string;
  date: Date;
  user: UserType;
  comment: string;
  rating: number;
};
