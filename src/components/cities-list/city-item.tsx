import {memo} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts.ts';

type CityItemProps = {
  name: string;
  onCityClick: (city: string) => void;
  isActive: boolean;
}

export function CityItem({name, onCityClick, isActive}: CityItemProps) {
  const cityClassName = isActive
    ? 'locations__item-link tabs__item tabs__item--active'
    : 'locations__item-link tabs__item';

  return (
    <li
      className="locations__item"
      onClick={() => {
        onCityClick(name);
      }}
    >
      <Link className={cityClassName} to={AppRoute.Main}>
        <span>{name}</span>
      </Link>
    </li>
  );
}

export const MemoizedCityItem = memo(CityItem);
