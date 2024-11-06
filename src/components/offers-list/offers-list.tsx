import {Offer} from '../../types/offer.ts';
import {PlaceCard} from '../place-card/place-card.tsx';
import {Nullable} from 'vitest';

type OffersListProps = {
  offers: Offer[];
  onActiveOfferChange: (id: Nullable<string>) => void;
};

export function OffersList({offers, onActiveOfferChange}: OffersListProps) {
  function handleMouseEnter(id: string) {
    onActiveOfferChange(id);
  }

  function handleMouseLeave() {
    onActiveOfferChange(null);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers
          .map((offer) => (
            <PlaceCard
              id={offer.id}
              key={offer.id}
              title={offer.title}
              isPremium={offer.isPremium}
              type={offer.type}
              imageSrc={offer.previewImage}
              price={offer.price}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />)
          )
      }
    </div>
  );
}
