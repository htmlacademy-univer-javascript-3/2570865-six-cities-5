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
      <a className="locations__item-link tabs__item" href="#">
        <span>{name}</span>
      </a>
    </li>
  );
}
