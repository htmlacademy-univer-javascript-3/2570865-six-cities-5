import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../consts.ts';

export const setError = createAction<string | null>('app/setError');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
