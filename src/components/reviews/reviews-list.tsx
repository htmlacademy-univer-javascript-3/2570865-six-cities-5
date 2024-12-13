import {Comment} from '../../types/comment.ts';
import {ReviewItem} from './review-item.tsx';

type ReviewsListProps = {
  reviews: Comment[];
}

export function ReviewsList({reviews}: ReviewsListProps) {

  return (
    <ul className="reviews__list">
      {
        reviews.map((review) =>
          (
            <ReviewItem
              key={review.id}
              review={review}
            />
          )
        )
      }
    </ul>
  );
}
