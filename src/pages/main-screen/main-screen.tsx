import {Offer} from '../../types/offer.ts';
import {MemoizedMap} from '../../components/map/map.tsx';
import {useCallback, useState} from 'react';
import {Nullable} from 'vitest';
import {MemoizedHeader} from '../../components/header/header.tsx';
import {MemoizedCityPlaceCardList} from '../../components/place-card/place-card-list.tsx';
import {MemoizedCitiesList} from '../../components/cities-list/cities-list.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {MemoizedSortOptions} from '../../components/sort-options/sort-options.tsx';
import {Sorting} from '../../consts.ts';
import {applySortingToOffersList} from '../../store/sorting.ts';
import {getCurrentCityName, getOffers, getSorting} from '../../store/selectors.ts';
import {selectCity} from '../../store/slices/city-slice/city-slice.ts';
import {applySorting} from '../../store/slices/offers-slice/offers-slice.ts';

type MainScreenProps = {
  cityNames: string[];
};

export function MainScreen({cityNames}: MainScreenProps) {
  const [activeOffer, setActiveOffer] = useState<Nullable<Offer>>(null);
  const dispatch = useAppDispatch();

  const cityName = useAppSelector(getCurrentCityName);
  const offers = useAppSelector(getOffers);
  const sorting = useAppSelector(getSorting);

  let currentOffers = offers.filter((offer) => offer.city.name === cityName);

  currentOffers = applySortingToOffersList(sorting, currentOffers);

  const handleActiveOfferChange = useCallback((id: Nullable<string>) => {
    const newActiveOffer = currentOffers.find((offer) => offer.id === id);
    setActiveOffer(newActiveOffer);
  }, [currentOffers]);

  const handleSortingOptionChange = useCallback((newSorting: Sorting) => {
    dispatch(applySorting(newSorting));
  }, [dispatch]);

  const handleCityClick = useCallback((city: string) => {
    dispatch(selectCity(city));
  }, [dispatch]);

  return (
    <div className="page page--gray page--main">
      <MemoizedHeader/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <MemoizedCitiesList
            cityNames={cityNames}
            onCityClick={handleCityClick}
          />
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {cityName}</b>

              <MemoizedSortOptions
                options={Object.values(Sorting)}
                onSortingOptionChange={handleSortingOptionChange}
              />
              <MemoizedCityPlaceCardList
                offers={currentOffers}
                onActiveItemChange={handleActiveOfferChange}
              />
            </section>

            <div className="cities__right-section">
              <MemoizedMap
                city={currentOffers[0]?.city}
                activeCityLocation={activeOffer?.city.location}
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
