import {Link} from 'react-router-dom';
import {AppRoute, FavoriteType} from '../../consts.ts';
import {memo} from 'react';
import {FavoriteButton} from '../favorite-button/favorite-button.tsx';

type PlaceCardFavoriteProps = {
  id: string;
  title: string;
  type: string;
  imageSrc: string;
  price: number;
  isPremium: boolean;
  rating: number;
}

export function FavoritePlaceCard({id, title, type, imageSrc, price, isPremium, rating}: PlaceCardFavoriteProps) {
  const offerUrl = AppRoute.Offer.replace(':id', id);

  return (
    <article className="favorites__card place-card">
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={offerUrl}>
          <img
            className="place-card__image"
            src={imageSrc}
            width="150" height="110"
            alt="Place image"
          />
        </Link>
      </div>

      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <FavoriteButton
            id={id}
            isFavorite
            type={FavoriteType.FavoritesList}
            width={18}
            height={19}
          />

        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${20 * rating}%`}}></span>
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

export const MemoizedFavoritePlaceCard = memo(FavoritePlaceCard);
