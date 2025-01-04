import {State} from '../../types/state.ts';
import {OfferDetails} from '../../types/offer-details.ts';
import {NameSpace} from '../../consts.ts';
import {Comments} from '../../types/comment.ts';
import {Offers} from '../../types/offer.ts';

export const getOfferDetails = (state: State): OfferDetails | null => state[NameSpace.OfferDetails].offerDetails;

export const getComments = (state: State): Comments => state[NameSpace.OfferDetails].comments;

export const getNearbyOffers = (state: State): Offers => state[NameSpace.OfferDetails].nearbyOffers;
