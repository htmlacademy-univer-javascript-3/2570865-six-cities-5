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
    'id': '1',
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
    'id': '2',
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
    'id': '3',
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
  },

  {
    'id': '0eb825a8-a18f-4da6-8db9-704a26508c7b',
    'title': 'The Pondhouse - A Magical Place',
    'type': 'house',
    'price': 661,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.86861,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.7
  },

  {
    'id': 'f0d0f0b0-3a54-4ab5-9690-16c62136628f',
    'title': 'The Joshua Tree House',
    'type': 'house',
    'price': 958,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85861,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 4.5
  },

  {
    'id': '876f1446-1ef4-4c7a-9683-731b6b8a084a',
    'title': 'Amazing and Extremely Central Flat',
    'type': 'hotel',
    'price': 168,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.950361,
      'longitude': 6.961974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 2.6
  },
  {
    'id': '7b079972-abcc-4cfe-9bb4-c388a14cc775',
    'title': 'The Joshua Tree House',
    'type': 'hotel',
    'price': 383,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.932361,
      'longitude': 6.937974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3
  },

  {
    'id': '5196b487-e57f-41d5-b8be-7d655a00c1bf',
    'title': 'Wood and stone place',
    'type': 'hotel',
    'price': 240,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 50.846557,
        'longitude': 4.351697,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.854557,
      'longitude': 4.364697,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4.9
  },
  {
    'id': '073f58fc-02ee-4129-ad61-7dfb0dff89f5',
    'title': 'House in countryside',
    'type': 'hotel',
    'price': 265,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 53.550341,
        'longitude': 10.000654,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 53.528341,
      'longitude': 10.018654,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.2
  },
  {
    'id': '6f496522-722b-43be-b9ba-78075861a892',
    'title': 'Canal View Prinsengracht',
    'type': 'apartment',
    'price': 464,
    'previewImage': 'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 51.236402,
      'longitude': 6.784314,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 2.9
  },
];
