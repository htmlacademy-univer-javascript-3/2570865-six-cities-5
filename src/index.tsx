import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/app.tsx';

const Setting = {
  OffersAmount: 123
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersAmount={Setting.OffersAmount}/>
  </React.StrictMode>
);
