import { ReviewModel } from 'types/review.ts';

export function getSortedReviews(reviews: ReviewModel[]) {
  return [...reviews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);
}
