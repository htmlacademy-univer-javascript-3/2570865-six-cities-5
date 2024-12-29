import {MemoizedFavoritePlaceCardList} from '../../components/favorites-list/favorite-place-card-list.tsx';
import {MemoizedHeader} from '../../components/header/header.tsx';
import {Offer} from '../../types/offer.ts';
import {MemoizedFooter} from '../../components/footer/footer.tsx';

export function FavoritesScreen() {

  const offers: Offer[] = [];

  return (
    <div className="page">
      <MemoizedHeader/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <MemoizedFavoritePlaceCardList
              offers={offers}
            />
          </section>
        </div>
      </main>

      <MemoizedFooter/>
    </div>
  );
}
