import Map from 'components/map';
import { OfferDetailModel } from 'types/offer-detail.ts';
import { ReviewModel } from 'types/review.ts';
import ReviewsBlock from 'components/reviews-components/reviews-block';
import { OfferItemModel } from 'types/offer-item.ts';
import OfferGallery from 'components/offer-components/offer-gallery';
import OfferBadge from 'components/offer-components/offer-badge';
import OfferBookmark from 'components/offer-components/offer-bookmark';
import OfferFeatures from 'components/offer-components/offer-features';
import { ClassNamePages } from 'const/const.ts';
import OfferHost from 'components/offer-components/offer-host';
import { capitalizeFirstLetter } from 'utils/function.ts';
import RatingStars from 'components/rating-stars';
import { useMemo } from 'react';

type TOfferDetailsProps = {
  offer: OfferDetailModel;
  reviews: ReviewModel[];
  nearOffers: OfferItemModel[];
};

const OfferDetails = ({ offer, reviews, nearOffers }: TOfferDetailsProps) => {
  const {
    id,
    images,
    isPremium,
    isFavorite,
    title,
    bedrooms,
    maxAdults,
    price,
    goods,
    rating,
    host,
  } = offer;
  const type = useMemo(() => capitalizeFirstLetter(offer.type), [offer.type]);
  const nearOffersByMap = [offer, ...nearOffers];

  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <OfferGallery images={images} type={type} />
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          <OfferBadge className={ClassNamePages.Offer} isPremium={isPremium} />
          <div className="offer__name-wrapper">
            <h1 className="offer__name">{title}</h1>
            <OfferBookmark
              className={ClassNamePages.Offer}
              type="offerDetail"
              isFavorite={isFavorite}
              offerId={id}
            />
          </div>
          <div className="offer__rating rating">
            <RatingStars type={ClassNamePages.Offer} rating={rating} />
            <span className="offer__rating-value rating__value">{rating}</span>
          </div>
          <OfferFeatures
            type={type}
            bedrooms={bedrooms}
            maxAdults={maxAdults}
          />
          <div className="offer__price">
            <b className="offer__price-value">&euro;{price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {goods.map((good) => (
                <li key={good} className="offer__inside-item">
                  {good}
                </li>
              ))}
            </ul>
          </div>
          <OfferHost host={host} />
          <ReviewsBlock activeOfferId={id} reviews={reviews} />
        </div>
      </div>
      <Map className="offer__map" offers={nearOffersByMap} activeOfferId={id} />
    </section>
  );
};

export default OfferDetails;
