import {MainScreen} from '../../pages/main-screen/main-screen.tsx';
import {Route, Routes} from 'react-router-dom';
import {LoginScreen} from '../../pages/login-screen/login-screen.tsx';
import {NotFoundScreen} from '../../pages/not-found-screen/not-found-screen.tsx';
import {OfferScreen} from '../../pages/offer-screen/offer-screen.tsx';
import {AppRoute} from '../../consts.ts';
import {FavoritesScreen} from '../../pages/favorites-screen/favorites-screen.tsx';
import {PrivateRoute} from '../private-route/private-route.tsx';
import {useAppSelector} from '../../hooks';
import {Spinner} from '../spinner/spinner.tsx';
import HistoryRouter from '../history-route/history-route.tsx';
import browserHistory from '../../browser-history.ts';

type AppScreenProps = {
  cityNames: string[];
};

export function App({cityNames}: AppScreenProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (isOffersDataLoading) {
    return (
      <Spinner/>
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen
              cityNames={cityNames}
            />
          }
        />

        <Route
          path={AppRoute.Login}
          element={<LoginScreen/>}
        />

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <FavoritesScreen/>
            </PrivateRoute>
          }
        />

        <Route
          path={AppRoute.Offer}
          element={<OfferScreen/>}
        />

        <Route
          path="*"
          element={<NotFoundScreen/>}
        />
      </Routes>
    </HistoryRouter>

  );
}
