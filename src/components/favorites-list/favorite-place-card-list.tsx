import {Offer} from '../../types/offer.ts';
import {FavoritePlaceCard} from './favorite-place-card.tsx';

type FavoritesListProps = {
  offers: Offer[];
}

export function FavoritePlaceCardList({offers}: FavoritesListProps) {
  const cities = Array.from(new Set(offers.map((offer) => offer.city.name))).toSorted();

  return (
    <ul className="favorites__list">
      {
        cities
          .map((city) => (

            <li key={city} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{city}</span>
                  </a>
                </div>
              </div>

              <div className="favorites__places">
                {
                  offers
                    .filter((offer) => offer.city.name === city)
                    .map((offer) => (
                      <FavoritePlaceCard
                        key={offer.id}
                        {...offer}
                        imageSrc={offer.previewImage}
                      />
                    ))
                }
              </div>

            </li>))
      }
    </ul>
  );
}
