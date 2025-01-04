import {memo, useCallback, useState} from 'react';
import {Sorting} from '../../consts.ts';
import {MemoizedSortOptionsItem} from './sort-options-item.tsx';
import {useAppSelector} from '../../hooks';
import {getSorting} from '../../store/selectors/offers-selectors.ts';

type SortOptionsProps = {
  options: Sorting[];
  onSortingOptionChange: (sortingOption: Sorting) => void;
}

export function SortOptions({options, onSortingOptionChange}: SortOptionsProps) {
  const [isVisible, setIsVisible] = useState(false);

  const sorting = useAppSelector(getSorting);

  const handleSortingExpandClick = useCallback(() => {
    setIsVisible((value) => !value);
  }, []);

  const handleSortingOptionClick = useCallback((option: Sorting) => {
    onSortingOptionChange(option);
    setIsVisible(false);
  }, [onSortingOptionChange]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortingExpandClick}
      >
        {sorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      {isVisible &&
        <ul className="places__options places__options--custom places__options--opened">
          {
            options.map((option) => (
              <MemoizedSortOptionsItem
                key={option}
                option={option}
                isActive={option === sorting}
                onItemClick={handleSortingOptionClick}
              />
            ))
          }
        </ul>}

    </form>
  );
}

export const MemoizedSortOptions = memo(SortOptions);
