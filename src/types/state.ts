import {store} from '../store';
import {AuthorizationStatus, Sorting} from '../consts.ts';
import {Offers} from './offer.ts';
import {UserData} from './user-data.ts';
import {OfferDetails} from './offer-details.ts';
import {Comments} from './comment.ts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

export type CityState = {
  city: string;
}

export type OffersState = {
  offers: Offers;
  isOffersDataLoading: boolean;
  sorting: Sorting;
  favoriteOffers: Offers;
  error: string | null;
}

export type OfferDetailsState = {
  offerDetails: OfferDetails | null;
  nearbyOffers: Offers;
  comments: Comments;
}
