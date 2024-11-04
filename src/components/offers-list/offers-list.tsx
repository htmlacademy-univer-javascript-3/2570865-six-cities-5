import {Offer} from '../../types/offer.ts';
import {PlaceCard} from '../place-card/place-card.tsx';
import {useState} from 'react';
import {Nullable} from 'vitest';

type OffersListProps = {
  offers: Offer[];
};

export function OffersList({offers}: OffersListProps) {
  const [, setActiveOfferId] = useState<Nullable<string>>('');

  function handleMouseEnter(id: string) {
    setActiveOfferId(id);
  }

  function handleMouseLeave() {
    setActiveOfferId(null);
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
