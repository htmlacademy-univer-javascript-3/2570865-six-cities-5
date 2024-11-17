import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer.ts';
import {Sorting} from '../consts.ts';

export const selectCity = createAction<{ city: string }>('selectCity');

export const fillOffersList = createAction<{ offers: Offer[] }>('fillOffersList');

export const applySorting = createAction<{ sorting: Sorting }>('applySorting');
