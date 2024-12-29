import {AuthorizationStatus, NameSpace, Sorting} from '../consts.ts';
import {State} from '../types/state.ts';
import {Offers} from '../types/offer.ts';
import {OfferDetails} from '../types/offer-details.ts';
import {Comments} from '../types/comment.ts';
import {UserData} from '../types/user-data.ts';


export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getUserData = (state: State): UserData | null => state[NameSpace.User].userData;

export const getCurrentCityName = (state: State): string => state[NameSpace.City].city;

export const getIsOffersDataLoading = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;

export const getFavoriteOffers = (state: State): Offers => state[NameSpace.Offers].favoriteOffers;

export const getSorting = (state: State): Sorting => state[NameSpace.Offers].sorting;

export const getOfferDetails = (state: State): OfferDetails | null => state[NameSpace.OfferDetails].offerDetails;

export const getComments = (state: State): Comments => state[NameSpace.OfferDetails].comments;

export const getNearbyOffers = (state: State): Offers => state[NameSpace.OfferDetails].nearbyOffers;
