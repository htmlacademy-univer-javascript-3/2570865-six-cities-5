import {MemoizedHeader} from '../../components/header/header.tsx';
import {MemoizedFooter} from '../../components/footer/footer.tsx';
import {useAppSelector} from '../../hooks';
import {FavoritesEmpty} from '../../components/favorites-content/favorites-empty.tsx';
import {FavoritesContent} from '../../components/favorites-content/favorites-content.tsx';
import {getFavoriteOffers} from '../../store/selectors/offers-selectors.ts';

export function FavoritesScreen() {

  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (
    <div className="page">
      <MemoizedHeader/>

      {
        favoriteOffers.length > 0
          ?
          <FavoritesContent
            favoriteOffers={favoriteOffers}
          />
          :
          <FavoritesEmpty/>
      }

      <MemoizedFooter/>
    </div>
  );
}
