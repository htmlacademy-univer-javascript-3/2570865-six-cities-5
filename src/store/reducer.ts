import {createReducer} from '@reduxjs/toolkit';
import {applySorting, fillOffersList, loadOffers, selectCity, setOffersDataLoadingStatus} from './action.ts';
import {Offers} from '../types/offer.ts';
import {CITY_NAMES, Sorting} from '../consts.ts';

const initialState: {
  city: string;
  offers: Offers;
  isOffersDataLoading: boolean;
  sorting: Sorting;
} = {
  city: CITY_NAMES[0],
  offers: [],
  isOffersDataLoading: false,
  sorting: Sorting.POPULAR
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fillOffersList, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(applySorting, (state, action) => {
      state.sorting = action.payload.sorting;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});
