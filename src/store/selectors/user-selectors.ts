import {State} from '../../types/state.ts';
import {AuthorizationStatus, NameSpace} from '../../consts.ts';
import {UserData} from '../../types/user-data.ts';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getUserData = (state: State): UserData | null => state[NameSpace.User].userData;
