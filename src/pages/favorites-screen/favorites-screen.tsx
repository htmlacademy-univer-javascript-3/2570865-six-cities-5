import {MemoizedFavoritePlaceCardList} from '../../components/favorites-list/favorite-place-card-list.tsx';
import {MemoizedHeader} from '../../components/header/header.tsx';
import {MemoizedFooter} from '../../components/footer/footer.tsx';
import {useAppSelector} from '../../hooks';
import {getFavoriteOffers} from '../../store/selectors.ts';

export function FavoritesScreen() {

  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (
    <div className="page">
      <MemoizedHeader/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <MemoizedFavoritePlaceCardList
              offers={favoriteOffers}
            />
          </section>
        </div>
      </main>

      <MemoizedFooter/>
    </div>
  );
}
