import {NameSpace} from '../consts.ts';
import {combineReducers} from '@reduxjs/toolkit';
import {offerDetailsSlice} from './slices/offer-details-slice/offer-details-slice.ts';
import {citySlice} from './slices/city-slice/city-slice.ts';
import {userSlice} from './slices/user-slice/user-slice.ts';
import {offersSlice} from './slices/offers-slice/offers-slice.ts';

export const rootReducer = combineReducers({
  [NameSpace.OfferDetails]: offerDetailsSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.City]: citySlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});
