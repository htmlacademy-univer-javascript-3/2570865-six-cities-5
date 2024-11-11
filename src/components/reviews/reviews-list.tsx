import {Review} from '../../types/review.ts';
import {ReviewItem} from './review-item.tsx';

type ReviewsListProps = {
  reviews: Review[];
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
