export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '/not-found'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum PlaceCardType {
  City,
  Near
}

export enum FavoriteType {
  OfferList,
  OfferDetails,
  FavoritesList
}

export const CITY_NAMES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum Sorting {
  POPULAR = 'Popular',
  PRICE_LOW_TO_HIGH = 'Price: low to high',
  PRICE_HIGH_TO_LOW = 'Price: high to low',
  TOP_RATED_FIRST = 'Top rated first',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum APIRoute {
  Offers = '/offers',
  NearbyOffers = '/offers/:id/nearby',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  OfferDetails = '/offers/:id',
  OfferComments = '/comments/:id',
}

export enum NameSpace {
  City = 'DATA',
  Offers = 'OFFERS',
  OfferDetails = 'OFFER_DETAILS',
  User = 'USER',
}
