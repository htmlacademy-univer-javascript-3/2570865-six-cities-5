import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/app.tsx';
import {OFFERS} from './mocks/offers.ts';
import {Provider} from 'react-redux';
import {store} from './store';
import {CITY_NAMES} from './consts.ts';

export const Setting = {
  Offers: OFFERS,
  CityNames: CITY_NAMES
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={Setting.Offers}
        cityNames={Setting.CityNames}
      />
    </Provider>
  </React.StrictMode>
);
