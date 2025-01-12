import {MemoizedCityItem} from './city-item.tsx';
import {memo} from 'react';
import {useAppSelector} from '../../hooks';
import {getCurrentCityName} from '../../store/selectors/city-selectors.ts';

type CitiesListProps = {
  cityNames: string[];
  onCityClick: (city: string) => void;
}

export function CitiesList({cityNames, onCityClick}: CitiesListProps) {

  const activeCity = useAppSelector(getCurrentCityName);

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
                  isActive={cityName === activeCity}
                />
              ))
          }
        </ul>
      </section>
    </div>
  );
}

export const MemoizedCitiesList = memo(CitiesList);
