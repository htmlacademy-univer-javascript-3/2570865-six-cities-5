import {Offer} from '../../types/offer.ts';
import {Map} from '../../components/map/map.tsx';
import {useState} from 'react';
import {Nullable} from 'vitest';
import {Header} from '../../components/header/header.tsx';
import {CityPlaceCardList} from '../../components/place-card/place-card-list.tsx';
import {CitiesList} from '../../components/cities-list/cities-list.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {applySorting, selectCity} from '../../store/action.ts';
import {SortOptions} from '../../components/sort-options/sort-options.tsx';
import {Sorting} from '../../consts.ts';
import {applySortingToOffersList} from '../../store/sorting.ts';

type MainScreenProps = {
  cityNames: string[];
};

export function MainScreen({cityNames}: MainScreenProps) {
  const [activeOffer, setActiveOffer] = useState<Nullable<Offer>>(null);
  const dispatch = useAppDispatch();

  const cityName = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const sorting = useAppSelector((state) => state.sorting);

  let currentOffers = offers.filter((offer) => offer.city.name === cityName);

  currentOffers = applySortingToOffersList(sorting, currentOffers);

  function handleActiveOfferChange(id: Nullable<string>) {
    const newActiveOffer = currentOffers.find((offer) => offer.id === id);
    setActiveOffer(newActiveOffer);
  }

  function handleSortingOptionChange(newSorting: Sorting) {
    dispatch(applySorting({sorting: newSorting}));
  }

  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList
            cityNames={cityNames}
            onCityClick={(city) => dispatch(selectCity({city: city}))}
          />
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {cityName}</b>

              <SortOptions
                options={Object.values(Sorting)}
                onSortingOptionChange={handleSortingOptionChange}
              />
              <CityPlaceCardList
                offers={currentOffers}
                onActiveItemChange={handleActiveOfferChange}
              />
            </section>

            <div className="cities__right-section">
              <Map
                city={currentOffers[0]?.city}
                activeOffer={activeOffer}
                offers={currentOffers}
                className="cities__map map"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
