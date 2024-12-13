import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offer} from '../../types/offer.ts';
import {useEffect, useRef} from 'react';
import {useMap} from '../../hooks/use-map.ts';
import {Nullable} from 'vitest';
import {City} from '../../types/city.ts';
import {OfferDetails} from '../../types/offer-details.ts';

type MapProps = {
  city: City;
  activeOffer: Nullable<OfferDetails>;
  offers: Offer[];
  className: string;
};

export function Map({city, activeOffer, offers, className}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: '/img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: '/img/pin-active.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude
          }, {
            icon: (offer.city.location === activeOffer?.city.location)
              ? currentCustomIcon
              : defaultCustomIcon
          }).addTo(map);

      });

    }
  }, [map, offers, city, activeOffer, currentCustomIcon, defaultCustomIcon]);

  return (
    <div
      className={className}
      ref={mapRef}
    >
    </div>
  );
}
