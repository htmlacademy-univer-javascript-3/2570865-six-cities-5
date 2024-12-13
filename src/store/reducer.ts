import {createReducer} from '@reduxjs/toolkit';
import {
  applySorting,
  fillOffersList,
  loadFavoriteOffers,
  loadNearbyOffers,
  loadOfferComments, loadOfferDetails,
  loadOffers,
  requireAuthorization,
  selectCity, sendComment,
  setError,
  setOffersDataLoadingStatus,
  updateUserData
} from './action.ts';
import {Offers} from '../types/offer.ts';
import {AuthorizationStatus, CITY_NAMES, Sorting} from '../consts.ts';
import {UserData} from '../types/user-data.ts';
import {Comments} from '../types/comment.ts';
import {OfferDetails} from '../types/offer-details.ts';

const initialState: {
  city: string;
  offers: Offers;
  isOffersDataLoading: boolean;
  sorting: Sorting;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  userData: UserData | null;
  favoriteOffers: Offers;
  nearbyOffers: Offers;
  comments: Comments;
  currentOfferDetails: OfferDetails | null;
} = {
  city: CITY_NAMES[0],
  offers: [],
  isOffersDataLoading: false,
  sorting: Sorting.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  userData: null,
  favoriteOffers: [],
  nearbyOffers: [],
  comments: [],
  currentOfferDetails: null
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
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadOfferComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadOfferDetails, (state, action) => {
      state.currentOfferDetails = action.payload;
    })
    .addCase(sendComment, (state, action)=>{
      state.comments.push(action.payload);
    });
});
