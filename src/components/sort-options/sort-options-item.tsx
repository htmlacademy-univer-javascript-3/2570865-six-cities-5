import {Sorting} from '../../consts.ts';

type SortOptionsItemProps = {
  option: Sorting;
  isActive: boolean;
  onItemClick: (option: Sorting) => void;
}

export function SortOptionsItem({option, isActive, onItemClick}: SortOptionsItemProps) {
  const className = isActive
    ? 'places__option places__option--active'
    : 'places__option';

  return (
    <li
      className={className}
      tabIndex={0}
      onClick={() => onItemClick(option)}
    >
      {option}
    </li>
  );
}
