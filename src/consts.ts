import leaflet from 'leaflet';

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

export const CustomIcon = {
  Default: leaflet.icon({
    iconUrl: '/img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  }),
  Current: leaflet.icon({
    iconUrl: '/img/pin-active.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  })
} as const;

export enum Sorting {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export const ApiConfig = {
  BackendUrl: 'https://14.design.htmlacademy.pro/six-cities',
  RequestTimeout: 5000,
};

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
