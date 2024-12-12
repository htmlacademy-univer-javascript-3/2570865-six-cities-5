import {createReducer} from '@reduxjs/toolkit';
import {
  applySorting,
  fillOffersList, loadFavoriteOffers,
  loadOffers,
  requireAuthorization,
  selectCity, setError,
  setOffersDataLoadingStatus, updateUserData
} from './action.ts';
import {Offers} from '../types/offer.ts';
import {AuthorizationStatus, CITY_NAMES, Sorting} from '../consts.ts';
import {UserData} from '../types/user-data.ts';

const initialState: {
  city: string;
  offers: Offers;
  isOffersDataLoading: boolean;
  sorting: Sorting;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  userData: UserData | null;
  favoriteOffers: Offers;
} = {
  city: CITY_NAMES[0],
  offers: [],
  isOffersDataLoading: false,
  sorting: Sorting.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  userData: null,
  favoriteOffers: [],
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(updateUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    });
});
