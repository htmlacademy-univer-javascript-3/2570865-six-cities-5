import {State} from '../../types/state.ts';
import {NameSpace} from '../../consts.ts';

export const getCurrentCityName = (state: State): string => state[NameSpace.City].city;
