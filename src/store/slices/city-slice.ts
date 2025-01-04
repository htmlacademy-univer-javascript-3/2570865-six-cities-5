import {CityState} from '../../types/state.ts';
import {CITY_NAMES, NameSpace} from '../../consts.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: CityState = {
  city: CITY_NAMES[0]
};

export const citySlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    selectCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    }
  },
});

export const {selectCity} = citySlice.actions;
