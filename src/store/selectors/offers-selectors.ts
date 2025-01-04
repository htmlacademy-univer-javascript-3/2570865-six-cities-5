import {State} from '../../types/state.ts';
import {NameSpace, Sorting} from '../../consts.ts';
import {Offers} from '../../types/offer.ts';

export const getIsOffersDataLoading = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;

export const getFavoriteOffers = (state: State): Offers => state[NameSpace.Offers].favoriteOffers;

export const getSorting = (state: State): Sorting => state[NameSpace.Offers].sorting;
