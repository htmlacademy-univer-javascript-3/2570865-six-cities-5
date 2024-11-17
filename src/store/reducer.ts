import {createReducer} from '@reduxjs/toolkit';
import {applySorting, fillOffersList, selectCity} from './action.ts';
import {Offer} from '../types/offer.ts';
import {CITY_NAMES, Sorting} from '../consts.ts';

const initialState: {
  city: string;
  offers: Offer[];
  sorting: Sorting;
} = {
  city: CITY_NAMES[0],
  offers: [],
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
    });
});
