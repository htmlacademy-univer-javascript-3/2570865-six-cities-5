import {AuthorizationStatus, NameSpace} from '../../../consts.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserState} from '../../../types/state.ts';
import {UserData} from '../../../types/user-data.ts';


const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    updateAuthorizationStatus(state, action: PayloadAction<AuthorizationStatus>) {
      state.authorizationStatus = action.payload;
    },
    updateUserData(state, action: PayloadAction<UserData | null>) {
      state.userData = action.payload;
    },
  }
});

export const {updateAuthorizationStatus, updateUserData} = userSlice.actions;


