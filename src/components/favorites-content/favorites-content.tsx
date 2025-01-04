import {MemoizedFavoritePlaceCardList} from '../favorite-place-card/favorite-place-card-list.tsx';
import {Offers} from '../../types/offer.ts';

type FavoritesContentProps = {
  favoriteOffers: Offers;
}

export function FavoritesContent({favoriteOffers}: FavoritesContentProps) {
  return (
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
  );
}
