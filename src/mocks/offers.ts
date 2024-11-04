import {Offer} from '../types/offer.ts';

export const offers: Offer[] = [
  {
    'id': '1',
    'title': 'Good apartment 1',
    'type': 'apartment',
    'price': 120123,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 1,
    'previewImage': './img/amsterdam.jpg'
  },

  {
    'id': '2',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 1230,
    'city': {
      'name': 'Moscow',
      'location': {
        'latitude': 2.35514938496378,
        'longitude': 42.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 58.35514938496378,
      'longitude': 9.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3,
    'previewImage': './img/amsterdam.jpg'
  },

  {
    'id': '3',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 9120,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 59.35514938496378,
        'longitude': 14.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4,
    'previewImage': './img/amsterdam.jpg'
  },

  {
    'id': '4',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 1120,
    'city': {
      'name': 'Tolyatti',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 5,
    'previewImage': './img/amsterdam.jpg'
  }
];
