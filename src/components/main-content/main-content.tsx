import {MemoizedSortOptions} from '../sort-options/sort-options.tsx';
import {Sorting} from '../../consts.ts';
import {MemoizedCityPlaceCardList} from '../place-card/place-card-list.tsx';
import {MemoizedMap} from '../map/map.tsx';
import {Offer, Offers} from '../../types/offer.ts';
import {Nullable} from 'vitest';

type MainContentProps = {
  onSortingOptionChange: (newSorting: Sorting) => void;
  onActiveOfferChange: (id: Nullable<string>) => void;
  offers: Offers;
  cityName: string;
  activeOffer: Nullable<Offer>;
};

export function MainContent({
  onSortingOptionChange,
  onActiveOfferChange,
  offers,
  cityName,
  activeOffer
}: MainContentProps) {
  return (
    <main className="page__main page__main--index">
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {cityName}</b>

            <MemoizedSortOptions
              options={Object.values(Sorting)}
              onSortingOptionChange={onSortingOptionChange}
            />
            <MemoizedCityPlaceCardList
              offers={offers}
              onActiveItemChange={onActiveOfferChange}
            />
          </section>

          <div className="cities__right-section">
            <MemoizedMap
              city={offers[0]?.city}
              activeCityLocation={activeOffer?.city.location}
              offers={offers}
              className="cities__map map"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
