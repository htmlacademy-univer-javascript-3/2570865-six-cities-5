import {Offer} from '../types/offer.ts';

export const OFFERS: Offer[] = [
  {
    'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Good apartment 1',
    'type': 'apartment',
    'price': 120123,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 10
      }
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 10
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
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 10
      }
    },
    'location': {
      'latitude': 52.3609553943508,
      'longitude': 4.85309666406198,
      'zoom': 10
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
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 10
      }
    },
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.929309666406198,
      'zoom': 10
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
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 10
      }
    },
    'location': {
      'latitude': 52.3809553943508,
      'longitude': 4.939309666406198,
      'zoom': 10
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 5,
    'previewImage': './img/amsterdam.jpg'
  }
];
