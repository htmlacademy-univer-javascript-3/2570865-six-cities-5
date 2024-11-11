import {Link} from 'react-router-dom';
import {AppRoute, PlaceCardType} from '../../consts.ts';
import {Nullable} from 'vitest';

type PlaceCardProps = {
  id: string;
  title: string;
  type: string;
  imageSrc: string;
  price: number;
  isPremium: boolean;
  width: number;
  height: number;
  onActiveItemChange?: (id: Nullable<string>) => void;
  placeCardType: PlaceCardType;
}

export function PlaceCard({
  id,
  title,
  type,
  imageSrc,
  price,
  isPremium,
  width,
  height,
  onActiveItemChange,
  placeCardType,
}: PlaceCardProps) {
  const offerUrl = AppRoute.Offer.replace(':id', id);

  let classNamePrefix: string = '';

  if (placeCardType === PlaceCardType.City) {
    classNamePrefix = 'cities';
  } else if (placeCardType === PlaceCardType.Near) {
    classNamePrefix = 'near-places';
  }

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
          <a href="#">
            <img
              className="place-card__image"
              src={imageSrc} width={width} height={height}
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
            {title}
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </Link>

    </article>
  );
}
