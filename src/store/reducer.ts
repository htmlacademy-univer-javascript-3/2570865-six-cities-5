import {createReducer} from '@reduxjs/toolkit';
import {fillOffersList, selectCity} from './action.ts';
import {Offer} from '../types/offer.ts';
import {CITY_NAMES} from '../consts.ts';

const initialState: {
  city: string;
  offers: Offer[];
} = {
  city: CITY_NAMES[0],
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fillOffersList, (state, action) => {
      state.offers = action.payload.offers;
    });
});
