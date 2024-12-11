import {CommentForm} from '../../components/comment-form/comment-form.tsx';
import {useParams} from 'react-router-dom';
import {OFFERS_DETAILS} from '../../mocks/offers-details.ts';
import {ReviewsList} from '../../components/reviews/reviews-list.tsx';
import {REVIEWS} from '../../mocks/reviews.ts';
import {Map} from '../../components/map/map.tsx';
import {Header} from '../../components/header/header.tsx';
import {NearPlaceCardList} from '../../components/place-card/place-card-list.tsx';
import {useAppSelector} from '../../hooks';


const reviews = REVIEWS;

export function OfferScreen() {

  const offers = useAppSelector((state) => state.offers);

  const id = useParams().id;
  const offerDetails = OFFERS_DETAILS.find((details) => details.id === id);

  if (!offerDetails) {
    return;
  }

  const activeOffer = offers.find((offer) => offer.id === id);

  const city = offerDetails.city;
  const nearbyOffers = offers.filter((details) => details.id !== id);

  return (

    <div className="page">

      <Header/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                offerDetails.images
                  .map((imageSrc) => (
                    <div
                      key={imageSrc}
                      className="offer__image-wrapper"
                    >
                      <img
                        className="offer__image"
                        src={imageSrc}
                        alt="Photo studio"
                      />
                    </div>
                  ))
              }
            </div>
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              {offerDetails.isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offerDetails.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>

              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: '80%'}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offerDetails.rating}</span>
              </div>

              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{offerDetails.type}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offerDetails.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offerDetails.maxAdults} adults
                </li>
              </ul>

              <div className="offer__price">
                <b className="offer__price-value">€{offerDetails.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {
                    offerDetails.goods
                      .map((good) => (
                        <li
                          key={good}
                          className="offer__inside-item"
                        >
                          {good}
                        </li>
                      ))
                  }
                </ul>
              </div>

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={offerDetails.host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offerDetails.host.name}</span>

                  {offerDetails.host.isPro &&
                    <span className="offer__user-status">Pro</span>}

                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offerDetails.description}
                  </p>
                </div>
              </div>

              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{reviews.length}</span>
                </h2>

                <ReviewsList
                  reviews={reviews}
                />
                <CommentForm/>
              </section>
            </div>
          </div>

          <Map
            city={city}
            activeOffer={activeOffer}
            offers={offers}
            className="offer__map map"
          />

        </section>

        <div className="container">
          <section className="near-places places">

            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>

            <NearPlaceCardList
              offers={nearbyOffers}
            />

          </section>
        </div>
      </main>
    </div>
  );
}
