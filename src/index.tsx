import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/app.tsx';
import {offers} from './mocks/offers.ts';

export const Setting = {
  Offers: offers,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers={Setting.Offers}
    />
  </React.StrictMode>
);
