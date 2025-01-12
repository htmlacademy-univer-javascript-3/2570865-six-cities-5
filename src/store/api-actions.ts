import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute, AuthorizationStatus} from '../consts.ts';
import {Offer, Offers} from '../types/offer.ts';
import {redirectToRoute} from './action.ts';
import {AuthData} from '../types/auth-data.ts';
import {UserData} from '../types/user-data.ts';
import {dropToken, saveToken} from '../api/token.ts';
import {Comment, Comments} from '../types/comment.ts';
import {OfferDetails} from '../types/offer-details.ts';
import {updateAuthorizationStatus, updateUserData} from './slices/user-slice.ts';
import {
  addOfferToFavorites,
  deleteOfferFromFavorites,
  loadFavoriteOffers,
  loadOffers,
  setOffersDataLoadingStatus
} from './slices/offers-slice.ts';
import {
  loadNearbyOffers,
  loadOfferComments,
  loadOfferDetails,
  sendComment,
  updateNearbyOffersFavorite,
  updateOfferDetailsFavoriteStatus
} from './slices/offer-details-slice.ts';
import {FavoriteOfferData} from '../types/favorite-offer-data.ts';


export const fetchFavoriteOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchFavoriteOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Favorite);
    dispatch(loadFavoriteOffers(data));
  },
);

export const toggleFavoriteStatusAction = createAsyncThunk<FavoriteOfferData, FavoriteOfferData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/toggleFavoriteStatus',
  async ({offerId, status}: FavoriteOfferData, {dispatch, extra: api}) => {
    const url = `${APIRoute.Favorite}/${offerId}/${status}`;
    const {data} = await api.post<Offer>(url);

    if (status === 0) {
      dispatch(deleteOfferFromFavorites(data));
    } else {
      dispatch(addOfferToFavorites(data));
    }

    dispatch(updateOfferDetailsFavoriteStatus({offerId: data.id, status: status}));
    dispatch(updateNearbyOffersFavorite({offerId: data.id, status: status}));

    return {offerId: data.id, status: status};
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const userData = (await api.get<UserData>(APIRoute.Login)).data;
      dispatch(updateAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(updateUserData(userData));
      dispatch(fetchFavoriteOffersAction());
    } catch {
      dispatch(updateAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const userData = (await api.post<UserData>(APIRoute.Login, {email, password})).data;
    saveToken(userData.token);
    dispatch(updateAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(updateUserData(userData));
    dispatch(fetchFavoriteOffersAction());
    dispatch(fetchOffersAction());
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(updateAuthorizationStatus(AuthorizationStatus.NoAuth));
    dispatch(updateUserData(null));
    dispatch(loadFavoriteOffers([]));
    dispatch(fetchOffersAction());
  },
);

export const fetchOfferCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offerDetails/fetchOfferComments',
  async (id, {dispatch, extra: api}) => {
    const url = APIRoute.OfferComments.replace(':id', id);
    const {data} = await api.get<Comments>(url);
    dispatch(loadOfferComments(data));
  },
);


export const fetchNearbyOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offerDetails/fetchNearbyOffers',
  async (id, {dispatch, extra: api}) => {
    const url = APIRoute.NearbyOffers.replace(':id', id);
    const {data} = await api.get<Offers>(url);
    dispatch(loadNearbyOffers(data));
  },
);

export const fetchOfferDetailsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offerDetails/fetchOfferDetails',
  async (id, {dispatch, extra: api}) => {
    const url = APIRoute.OfferDetails.replace(':id', id);

    try {
      const {data} = await api.get<OfferDetails>(url);
      dispatch(loadOfferDetails(data));
      dispatch(fetchOfferCommentsAction(id));
      dispatch(fetchNearbyOffersAction(id));
    } catch (e) {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  },
);

export const sendCommentAction = createAsyncThunk<void, { offerId: string; comment: string; rating: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offerDetails/sendComment',
  async ({offerId, comment, rating}, {dispatch, extra: api}) => {
    const url = APIRoute.OfferComments.replace(':id', offerId);
    const commentData = (await api.post<Comment>(url, {comment: comment, rating: Number(rating)})).data;
    dispatch(sendComment(commentData));
  }
);
