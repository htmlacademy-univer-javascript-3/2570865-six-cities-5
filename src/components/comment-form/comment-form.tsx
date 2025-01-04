import {ChangeEvent, FormEvent, Fragment, useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {sendCommentAction} from '../../store/api-actions.ts';

type CommentFormProps = {
  offerId: string;
}

export function CommentForm({offerId}: CommentFormProps) {
  const [formData, setFormData] = useState({rating: '', review: ''});
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useAppDispatch();


  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    const {name, value} = event.currentTarget;
    setFormData({...formData, [name]: value});
  }

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    if (!formData.rating || !formData.review) {
      return;
    }

    setIsFormSubmitting(true);

    const comment = {
      offerId: offerId,
      comment: formData.review,
      rating: formData.rating,
    };

    dispatch(sendCommentAction(comment))
      .unwrap()
      .then(() => {
        setErrorMessage('');
        setFormData({review: '', rating: ''});
      })
      .catch(() => {
        setErrorMessage('Error. Please try again');
      })
      .finally(() => {
        setIsFormSubmitting(false);
      });
  }

  const rating = Number(formData.rating);

  const isSubmitButtonActive = rating > 0 && formData.review.length >= 50 && formData.review.length <= 300
    && !isFormSubmitting;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div
        className="reviews__rating-form form__rating"
      >
        {
          [5, 4, 3, 2, 1].map((stars) => (
            <Fragment
              key={`${stars}-stars`}
            >
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={stars}
                id={`${stars}-stars`}
                type="radio"
                checked={rating === stars}
                onChange={handleInputChange}
                disabled={isFormSubmitting}
              />
              <label
                htmlFor={`${stars}-stars`}
                className="reviews__rating-label form__rating-label"
                title="perfect"
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star"/>
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleInputChange}
        value={formData.review}
        disabled={isFormSubmitting}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          disabled={!isSubmitButtonActive}
          type="submit"
        >
          Submit
        </button>
      </div>

      {
        errorMessage &&
        <p
          className="error"
          style={{color: 'red'}}
        >{errorMessage}
        </p>
      }
    </form>
  );
}
