import {Sorting} from '../consts.ts';
import {Offer} from '../types/offer.ts';

export function applySortingToOffersList(sorting: Sorting, offers: Offer[]) {
  switch (sorting) {
    case Sorting.POPULAR: {
      return offers;
    }
    case Sorting.PRICE_HIGH_TO_LOW: {
      return offers.toSorted((a, b) => b.price - a.price);
    }
    case Sorting.PRICE_LOW_TO_HIGH: {
      return offers.toSorted((a, b) => a.price - b.price);
    }
    case Sorting.TOP_RATED_FIRST: {
      return offers.toSorted((a, b) => a.rating - b.rating);
    }
  }
}
