import {CityItem} from './city-item.tsx';

type CitiesListProps = {
  cityNames: string[];
  onCityClick: (city: string) => void;
}

export function CitiesList({cityNames, onCityClick}: CitiesListProps) {

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          cityNames
            .map((cityName) => (
              <CityItem
                key={cityName}
                name={cityName}
                onCityClick={onCityClick}
              />
            ))
        }
      </ul>
    </section>
  );
}
