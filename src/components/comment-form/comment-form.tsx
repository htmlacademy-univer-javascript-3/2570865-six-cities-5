import {ChangeEvent, FormEvent, useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {sendCommentAction} from '../../store/api-actions.ts';

type CommentFormProps = {
  offerId: string;
}

export function CommentForm({offerId}: CommentFormProps) {
  const [formData, setFormData] = useState({rating: 0, review: ''});

  const dispatch = useAppDispatch();

  function handleOnChangeForm(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    const {name, value} = event.currentTarget;
    setFormData({...formData, [name]: value});
  }

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault();

    if (!formData.rating || !formData.review) {
      return;
    }

    const comment = {
      offerId: offerId,
      comment: formData.review,
      rating: formData.rating,
    };

    dispatch(sendCommentAction(comment));
  }

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleOnSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div
        className="reviews__rating-form form__rating"
      >
        {
          [5, 4, 3, 2, 1].map((stars) => (
            <>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={stars}
                id={`${stars}-stars`}
                type="radio"
                onChange={handleOnChangeForm}
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
            </>
          ))
        }
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleOnChangeForm}
        value={formData.review}
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
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
