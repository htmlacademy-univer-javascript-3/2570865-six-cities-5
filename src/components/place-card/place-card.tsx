import {Link} from 'react-router-dom';
import {AppRoute, FavoriteType, PlaceCardType} from '../../consts.ts';
import {Nullable} from 'vitest';
import {memo} from 'react';
import {FavoriteButton} from '../favorite-button/favorite-button.tsx';

type PlaceCardProps = {
  id: string;
  title: string;
  type: string;
  imageSrc: string;
  price: number;
  isPremium: boolean;
  isFavorite: boolean;
  width: number;
  height: number;
  onActiveItemChange?: (id: Nullable<string>) => void;
  placeCardType: PlaceCardType;
  rating: number;
}

export function PlaceCard({
  id,
  title,
  type,
  imageSrc,
  price,
  isPremium,
  isFavorite,
  width,
  height,
  onActiveItemChange,
  placeCardType,
  rating,
}: PlaceCardProps) {
  const offerUrl = AppRoute.Offer.replace(':id', id);

  let classNamePrefix: string = '';

  if (placeCardType === PlaceCardType.City) {
    classNamePrefix = 'cities';
  } else if (placeCardType === PlaceCardType.Near) {
    classNamePrefix = 'near-places';
  }

  const capitalizedType = type[0].toUpperCase() + type.substring(1);

  return (
    <article
      className={`${classNamePrefix}__card place-card`}
      onMouseEnter={() => onActiveItemChange?.(id)}
      onMouseLeave={() => onActiveItemChange?.(null)}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <Link to={offerUrl}>
        <div className={`${classNamePrefix}__image-wrapper place-card__image-wrapper`}>
          <img
            className="place-card__image"
            src={imageSrc} width={width} height={height}
            alt="Place image"
          />
        </div>

        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>

            <FavoriteButton
              id={id}
              isFavorite={isFavorite}
              type={FavoriteType.OfferList}
              width={18}
              height={19}
            />

          </div>

          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${20 * Math.round(rating)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            {title}
          </h2>
          <p className="place-card__type">{capitalizedType}</p>
        </div>
      </Link>

    </article>
  );
}

export const MemoizedPlaceCard = memo(PlaceCard);
