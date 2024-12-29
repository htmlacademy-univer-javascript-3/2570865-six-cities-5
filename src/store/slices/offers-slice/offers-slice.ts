import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, Sorting} from '../../../consts.ts';
import {Offers} from '../../../types/offer.ts';
import {OffersState} from '../../../types/state.ts';

const initialState: OffersState = {
  offers: [],
  isOffersDataLoading: false,
  sorting: Sorting.POPULAR,
  favoriteOffers: [],
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    loadOffers(state, action: PayloadAction<Offers>) {
      state.offers = action.payload;
    },
    applySorting(state, action: PayloadAction<Sorting>) {
      state.sorting = action.payload;
    },
    setOffersDataLoadingStatus(state, action: PayloadAction<boolean>) {
      state.isOffersDataLoading = action.payload;
    },
    loadFavoriteOffers(state, action: PayloadAction<Offers>) {
      state.favoriteOffers = action.payload;
    }
  },
});

export const {loadOffers, setOffersDataLoadingStatus, applySorting, loadFavoriteOffers} = offersSlice.actions;
