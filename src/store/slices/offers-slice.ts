import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, Sorting} from '../../consts.ts';
import {Offer, Offers} from '../../types/offer.ts';
import {OffersState} from '../../types/state.ts';
import {toggleFavoriteStatusAction} from '../api-actions.ts';

const initialState: OffersState = {
  offers: [],
  isOffersDataLoading: false,
  sorting: Sorting.Popular,
  favoriteOffers: [],
  error: null,
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
    },
    addOfferToFavorites(state, action: PayloadAction<Offer>) {
      const offer = action.payload;

      if (!state.favoriteOffers.find((o) => o.id === offer.id)) {
        state.favoriteOffers.push(offer);
      }
    },
    deleteOfferFromFavorites(state, action: PayloadAction<Offer>) {
      state.favoriteOffers = state.favoriteOffers.filter((o) => o.id !== action.payload.id);
    },
  },
  extraReducers: ((builder) => {
    builder
      .addCase(toggleFavoriteStatusAction.pending, (state) => {
        state.error = null;
      })
      .addCase(toggleFavoriteStatusAction.rejected, (state, {error}) => {
        if (error.message !== undefined) {
          state.error = error.message;
        } else {
          state.error = null;
        }
      })
      .addCase(toggleFavoriteStatusAction.fulfilled, (state, action) => {
        const offer = state.offers.find((o) => o.id === action.payload.offerId);

        if (!offer) {
          return;
        }

        offer.isFavorite = action.payload.status === 1;
      });
  })
});

export const {
  loadOffers,
  addOfferToFavorites,
  deleteOfferFromFavorites,
  setOffersDataLoadingStatus,
  applySorting,
  loadFavoriteOffers,
} = offersSlice.actions;
