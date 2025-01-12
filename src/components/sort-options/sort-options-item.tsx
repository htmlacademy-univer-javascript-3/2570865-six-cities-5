import {Sorting} from '../../consts.ts';
import {memo} from 'react';

type SortOptionsItemProps = {
  option: Sorting;
  isActive: boolean;
  onItemClick: (option: Sorting) => void;
}

export function SortOptionsItem({option, isActive, onItemClick}: SortOptionsItemProps) {
  const isActiveClassName = isActive
    ? 'places__option places__option--active'
    : 'places__option';

  return (
    <li
      className={isActiveClassName}
      tabIndex={0}
      onClick={() => onItemClick(option)}
    >
      {option}
    </li>
  );
}

export const MemoizedSortOptionsItem = memo(SortOptionsItem);
