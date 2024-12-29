import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions.ts';
import {getAuthorizationStatus, getFavoriteOffers, getUserData} from '../../store/selectors.ts';
import {memo, useCallback} from 'react';

export function Header() {

  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUserData);
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  const handleLogoutClick = useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Main} className="header__logo-link">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={AppRoute.Favorites}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  {
                    userData &&
                    <>
                      <span className="header__user-name user__name">
                        {userData.email}
                      </span>
                      <span className="header__favorite-count">{favoriteOffers?.length}</span>
                    </>
                  }
                </Link>
              </li>

              {
                authorizationStatus === AuthorizationStatus.Auth
                  ?
                  <li className="header__nav-item">
                    <Link
                      className="header__nav-link"
                      to={AppRoute.Login}
                      onClick={handleLogoutClick}
                    >
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                  :
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Login}
                  >
                    <span className="header__login">Sign in</span>
                  </Link>
              }

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export const MemoizedHeader = memo(Header);
