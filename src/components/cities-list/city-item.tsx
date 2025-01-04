import {memo} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts.ts';

type CityItemProps = {
  name: string;
  onCityClick: (city: string) => void;
}

export function CityItem({name, onCityClick}: CityItemProps) {
  return (
    <li
      className="locations__item"
      onClick={() => {
        onCityClick(name);
      }}
    >
      <Link className="locations__item-link tabs__item" to={AppRoute.Main}>
        <span>{name}</span>
      </Link>
    </li>
  );
}

export const MemoizedCityItem = memo(CityItem);
