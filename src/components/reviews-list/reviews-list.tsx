import {Comment} from '../../types/comment.ts';
import {MemoizedReviewItem} from './review-item.tsx';
import {memo} from 'react';

type ReviewsListProps = {
  reviews: Comment[];
}

export function ReviewsList({reviews}: ReviewsListProps) {

  return (
    <ul className="reviews__list">
      {
        reviews.map((review) =>
          (
            <MemoizedReviewItem
              key={review.id}
              review={review}
            />
          )
        )
      }
    </ul>
  );
}

export const MemoizedReviewsList = memo(ReviewsList);
