import {createAPI} from '../api/api.ts';
import {configureStore} from '@reduxjs/toolkit';
import {redirect} from './middlewares/redirect.ts';
import {rootReducer} from './root-reducer.ts';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api
    }
  }).concat(redirect)
});
