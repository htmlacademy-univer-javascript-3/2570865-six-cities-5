import {Offer} from '../../types/offer.ts';
import {PlaceCard} from '../place-card/place-card.tsx';
import {useState} from 'react';

type OffersListProps = {
  offers: Offer[];
};

export function OffersList({offers}: OffersListProps) {
  const [, setActiveOfferId] = useState('');

  function handleMouseEnter(id: string) {
    setActiveOfferId(id);
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
            />)
          )
      }
    </div>
  );
}
