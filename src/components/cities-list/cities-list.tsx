import {MemoizedCityItem} from './city-item.tsx';
import {memo} from 'react';

type CitiesListProps = {
  cityNames: string[];
  onCityClick: (city: string) => void;
}

export function CitiesList({cityNames, onCityClick}: CitiesListProps) {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cityNames
              .map((cityName) => (
                <MemoizedCityItem
                  key={cityName}
                  name={cityName}
                  onCityClick={onCityClick}
                />
              ))
          }
        </ul>
      </section>
    </div>
  );
}

export const MemoizedCitiesList = memo(CitiesList);
