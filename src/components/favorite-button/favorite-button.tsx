import {MouseEvent} from 'react';
import {AppRoute, AuthorizationStatus, FavoriteType} from '../../consts.ts';
import {toggleFavoriteStatusAction} from '../../store/api-actions.ts';
import {redirectToRoute} from '../../store/action.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAuthorizationStatus} from '../../store/selectors/user-selectors.ts';

type FavoriteButtonProps = {
  id: string;
  isFavorite: boolean;
  type: FavoriteType;
  width: number;
  height: number;
};

export function FavoriteButton({id, isFavorite, type, width, height}: FavoriteButtonProps) {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  const active = isFavorite ? '--active' : '';

  let bookmarkButtonClassName;
  let bookmarkIconClassName;

  if (type === FavoriteType.OfferList) {
    bookmarkButtonClassName = `place-card__bookmark-button${active} button`;
    bookmarkIconClassName = 'place-card__bookmark-icon';
  } else if (type === FavoriteType.FavoritesList) {
    bookmarkButtonClassName = `place-card__bookmark-button place-card__bookmark-button${active} button`;
    bookmarkIconClassName = 'place-card__bookmark-icon';
  } else if(type === FavoriteType.OfferDetails) {
    bookmarkButtonClassName = `offer__bookmark-button offer__bookmark-button${active} button`;
    bookmarkIconClassName = 'offer__bookmark-icon';
  }

  function handleButtonClick(event: MouseEvent) {
    event.preventDefault();

    if (authorizationStatus === AuthorizationStatus.Auth) {
      const status = isFavorite ? 0 : 1;
      dispatch(toggleFavoriteStatusAction({offerId: id, status: status}));
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  }

  return (
    <button
      className={bookmarkButtonClassName}
      type="button"
      onClick={handleButtonClick}
    >
      <svg
        className={bookmarkIconClassName}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
