import {Offer} from '../../types/offer.ts';
import {Map} from '../../components/map/map.tsx';
import {useState} from 'react';
import {Nullable} from 'vitest';
import {Header} from '../../components/header/header.tsx';
import {CityPlaceCardList} from '../../components/place-card/place-card-list.tsx';
import {CitiesList} from '../../components/cities-list/cities-list.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {selectCity} from '../../store/action.ts';

type MainScreenProps = {
  cityNames: string[];
};

export function MainScreen({cityNames}: MainScreenProps) {
  const [activeOffer, setActiveOffer] = useState<Nullable<Offer>>(null);
  const dispatch = useAppDispatch();

  const cityName = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  const currentOffers = offers.filter((offer) => offer.city.name === cityName);

  function handleActiveOfferChange(id: Nullable<string>) {
    const newActiveOffer = currentOffers.find((offer) => offer.id === id);
    setActiveOffer(newActiveOffer);
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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
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
