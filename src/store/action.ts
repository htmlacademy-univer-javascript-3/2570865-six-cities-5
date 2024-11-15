import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer.ts';

export const selectCity = createAction<{ city: string }>('selectCity');

export const fillOffersList = createAction<{ offers: Offer[] }>('fillOffersList');
