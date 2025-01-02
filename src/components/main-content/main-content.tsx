import {MemoizedSortOptions} from '../sort-options/sort-options.tsx';
import {Sorting} from '../../consts.ts';
import {MemoizedCityPlaceCardList} from '../place-card/place-card-list.tsx';
import {MemoizedMap} from '../map/map.tsx';
import {Offer, Offers} from '../../types/offer.ts';
import {Nullable} from 'vitest';

type MainContentProps = {
  handleSortingOptionChange: (newSorting: Sorting) => void;
  handleActiveOfferChange: (id: Nullable<string>) => void;
  offers: Offers;
  cityName: string;
  activeOffer: Nullable<Offer>;
};

export function MainContent({
  handleSortingOptionChange,
  handleActiveOfferChange,
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
              onSortingOptionChange={handleSortingOptionChange}
            />
            <MemoizedCityPlaceCardList
              offers={offers}
              onActiveItemChange={handleActiveOfferChange}
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
