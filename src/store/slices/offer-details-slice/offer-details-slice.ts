import {OfferDetailsState} from '../../../types/state.ts';
import {NameSpace} from '../../../consts.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Comment, Comments} from '../../../types/comment.ts';
import {Offers} from '../../../types/offer.ts';
import {OfferDetails} from '../../../types/offer-details.ts';

const initialState: OfferDetailsState = {
  comments: [],
  nearbyOffers: [],
  offerDetails: null
};

export const offerDetailsSlice = createSlice({
  name: NameSpace.OfferDetails,
  initialState,
  reducers: {
    loadOfferComments(state, action: PayloadAction<Comments>) {
      state.comments = action.payload;
    },
    loadNearbyOffers(state, action: PayloadAction<Offers>) {
      state.nearbyOffers = action.payload;
    },
    loadOfferDetails(state, action: PayloadAction<OfferDetails>) {
      state.offerDetails = action.payload;
    },
    sendComment(state, action: PayloadAction<Comment>) {
      state.comments.push(action.payload);
    },
    updateOfferDetailsFavoriteStatus(state, action: PayloadAction<{ offerId: string; status: number }>) {
      const {offerId, status} = action.payload;
      const offerDetails = state.offerDetails;

      if (offerDetails === null || offerDetails.id !== offerId) {
        return;
      }

      offerDetails.isFavorite = status === 1;
    },
    updateNearbyOffersFavorite(state, action: PayloadAction<{ offerId: string; status: number }>) {
      const {offerId, status} = action.payload;
      const targetOffer = state.nearbyOffers.find((o) => o.id === offerId);
      if (targetOffer) {
        targetOffer.isFavorite = status === 1;
      }
    }
  },
});

export const {
  loadOfferComments,
  loadOfferDetails,
  loadNearbyOffers,
  sendComment,
  updateOfferDetailsFavoriteStatus,
  updateNearbyOffersFavorite,
} = offerDetailsSlice.actions;
