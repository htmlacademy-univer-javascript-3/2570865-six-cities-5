import {createAction} from '@reduxjs/toolkit';
import {Offer, Offers} from '../types/offer.ts';
import {AppRoute, AuthorizationStatus, Sorting} from '../consts.ts';
import {UserData} from '../types/user-data.ts';
import {Comment, Comments} from '../types/comment.ts';
import {OfferDetails} from '../types/offer-details.ts';

export const selectCity = createAction<{ city: string }>('selectCity');

export const fillOffersList = createAction<{ offers: Offer[] }>('fillOffersList');

export const applySorting = createAction<{ sorting: Sorting }>('applySorting');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const loadFavoriteOffers = createAction<Offers>('data/loadFavoriteOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const updateUserData = createAction<UserData | null>('user/updateUserData');

export const setError = createAction<string | null>('app/setError');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const loadOfferComments = createAction<Comments>('data/loadOfferComments');

export const loadNearbyOffers = createAction<Offers>('data/loadNearbyOffers');

export const loadOfferDetails = createAction<OfferDetails>('data/loadOfferDetails');

export const sendComment = createAction<Comment>('data/sendComment');
