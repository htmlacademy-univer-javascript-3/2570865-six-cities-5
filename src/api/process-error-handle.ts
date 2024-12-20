import {clearErrorAction} from '../store/api-actions.ts';
import {store} from '../store';
import {setError} from '../store/action.ts';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
