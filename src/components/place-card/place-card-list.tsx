import {Offer} from '../../types/offer.ts';
import {PlaceCard} from './place-card.tsx';
import {Nullable} from 'vitest';
import {PlaceCardType} from '../../consts.ts';

type GeneralPlaceCardListCommonProps = {
  offers: Offer[];
  onActiveItemChange?: (id: Nullable<string>) => void;
  imageWidth: number;
  imageHeight: number;
  className: string;
  placeCardType: PlaceCardType;
};

function GeneralPlaceCardList({
  offers,
  onActiveItemChange,
  imageWidth,
  imageHeight,
  className,
  placeCardType,
}: GeneralPlaceCardListCommonProps) {
  return (
    <div className={className}>
      {
        offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            {...offer}
            imageSrc={offer.previewImage}
            width={imageWidth}
            height={imageHeight}
            placeCardType={placeCardType}
            onActiveItemChange={onActiveItemChange}
          />
        ))
      }
    </div>
  );
}

type PlaceCardListProps = {
  offers: Offer[];
  onActiveItemChange?: (id: Nullable<string>) => void;
}

export function CityPlaceCardList(props: PlaceCardListProps) {
  return (
    <GeneralPlaceCardList
      {...props}
      imageWidth={260}
      imageHeight={200}
      className="cities__places-list places__list tabs__content"
      placeCardType={PlaceCardType.City}
    />
  );
}

export function NearPlaceCardList(props: PlaceCardListProps) {
  return (
    <GeneralPlaceCardList
      {...props}
      imageWidth={260}
      imageHeight={200}
      className="near-places__list places__list"
      placeCardType={PlaceCardType.Near}
    />
  );
}
