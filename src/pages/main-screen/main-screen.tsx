import {Offer} from '../../types/offer.ts';
import {useCallback, useState} from 'react';
import {Nullable} from 'vitest';
import {MemoizedHeader} from '../../components/header/header.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Sorting} from '../../consts.ts';
import {applySortingToOffersList} from '../../store/sorting.ts';
import {selectCity} from '../../store/slices/city-slice.ts';
import {applySorting} from '../../store/slices/offers-slice.ts';
import {MainEmpty} from '../../components/main-content/main-empty.tsx';
import {MainContent} from '../../components/main-content/main-content.tsx';
import {MemoizedCitiesList} from '../../components/cities-list/cities-list.tsx';
import {getCurrentCityName} from '../../store/selectors/city-selectors.ts';
import {getOffers, getSorting} from '../../store/selectors/offers-selectors.ts';

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

  const handleSortingOptionClick = useCallback((newSorting: Sorting) => {
    dispatch(applySorting(newSorting));
  }, [dispatch]);

  const handleCityClick = useCallback((city: string) => {
    dispatch(selectCity(city));
  }, [dispatch]);

  return (
    <div className="page page--gray page--main">
      <MemoizedHeader/>

      <h1 className="visually-hidden">Cities</h1>
      <MemoizedCitiesList
        cityNames={cityNames}
        onCityClick={handleCityClick}
      />

      {
        currentOffers.length > 0
          ?
          <MainContent
            offers={currentOffers}
            activeOffer={activeOffer}
            cityName={cityName}
            onActiveOfferChange={handleActiveOfferChange}
            onSortingOptionChange={handleSortingOptionClick}
          />
          :
          <MainEmpty/>
      }

    </div>
  );
}
