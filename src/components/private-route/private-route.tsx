import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import {Navigate} from 'react-router-dom';

export type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export function PrivateRoute({authorizationStatus, children}: PrivateRouteProps) {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
}
