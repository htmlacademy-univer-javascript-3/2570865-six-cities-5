import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Offer} from '../../types/offer.ts';
import {memo, useEffect, useRef} from 'react';
import {useMap} from '../../hooks/use-map.ts';
import {Nullable} from 'vitest';
import {City, Location} from '../../types/city.ts';
import {CustomIcon} from '../../consts.ts';

type MapProps = {
  city: City;
  activeCityLocation: Nullable<Location>;
  offers: Offer[];
  className: string;
};

export function Map({city, activeCityLocation, offers, className}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude
          }, {
            icon: (offer.city.location === activeCityLocation)
              ? CustomIcon.Current
              : CustomIcon.Default
          }).addTo(map);
      });
    }
  }, [map, offers, city, activeCityLocation]);

  return (
    <div
      className={className}
      ref={mapRef}
    >
    </div>
  );
}

export const MemoizedMap = memo(Map);
