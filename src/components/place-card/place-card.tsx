import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts.ts';

type PlaceCardProps = {
  id: string;
  title: string;
  type: string;
  imageSrc: string;
  price: number;
  isPremium: boolean;
  onMouseEnter: (id: string) => void;
  onMouseLeave: (id: string) => void;
}

export function PlaceCard({id, title, type, imageSrc, price, isPremium, onMouseEnter, onMouseLeave}: PlaceCardProps) {
  const offerUrl = AppRoute.Offer.replace(':id', id);

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave(id)}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={imageSrc} width="260" height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerUrl}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}