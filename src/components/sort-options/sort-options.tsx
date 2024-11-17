import {useState} from 'react';
import {Sorting} from '../../consts.ts';
import {SortOptionsItem} from './sort-options-item.tsx';
import {useAppSelector} from '../../hooks';

type SortOptionsProps = {
  options: Sorting[];
  onSortingOptionChange: (sortingOption: Sorting) => void;
}

export function SortOptions({options, onSortingOptionChange}: SortOptionsProps) {
  const [isVisible, setIsVisible] = useState(false);

  const sorting = useAppSelector((state) => state.sorting);

  function handleSortingExpand() {
    setIsVisible((value) => !value);
  }

  function handleSortingOptionChange(option: Sorting) {
    onSortingOptionChange(option);
    setIsVisible(false);
  }

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => handleSortingExpand()}
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
              <SortOptionsItem
                key={option}
                option={option}
                isActive={option === sorting}
                onItemClick={handleSortingOptionChange}
              />
            ))
          }
        </ul>}

    </form>
  );
}
