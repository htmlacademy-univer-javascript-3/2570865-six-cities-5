import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/app.tsx';
import {Provider} from 'react-redux';
import {store} from './store';
import {CITY_NAMES} from './consts.ts';
import {checkAuthAction, fetchOffersAction} from './store/api-actions.ts';
import {ToastContainer} from 'react-toastify';

export const Setting = {
  CityNames: CITY_NAMES
} as const;

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App
        cityNames={Setting.CityNames}
      />
    </Provider>
  </React.StrictMode>
);
