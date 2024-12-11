import {createAction} from '@reduxjs/toolkit';
import {Offer, Offers} from '../types/offer.ts';
import {Sorting} from '../consts.ts';

export const selectCity = createAction<{ city: string }>('selectCity');

export const fillOffersList = createAction<{ offers: Offer[] }>('fillOffersList');

export const applySorting = createAction<{ sorting: Sorting }>('applySorting');

export const loadOffers = createAction<Offers>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
