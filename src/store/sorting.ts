import {Sorting} from '../consts.ts';
import {Offer} from '../types/offer.ts';

export function applySortingToOffersList(sorting: Sorting, offers: Offer[]) {
  switch (sorting) {
    case Sorting.Popular: {
      return offers;
    }
    case Sorting.PriceHighToLow: {
      return offers.toSorted((a, b) => b.price - a.price);
    }
    case Sorting.PriceLowToHigh: {
      return offers.toSorted((a, b) => a.price - b.price);
    }
    case Sorting.TopRatedFirst: {
      return offers.toSorted((a, b) => b.rating - a.rating);
    }
  }
}
