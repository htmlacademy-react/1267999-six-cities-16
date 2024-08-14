import { OfferItemModel } from 'types/offer-item.ts';
import CartItem from 'components/offer-components/cart-item';

type OtherOffersProps = {
  nearOffers: OfferItemModel[];
};

const OtherOffers = ({ nearOffers }: OtherOffersProps) => {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          {nearOffers.map((nearOffer) => (
            <CartItem
              key={nearOffer.id}
              offer={nearOffer}
              typeCard="near-places"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OtherOffers;
