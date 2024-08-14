import { OfferItemModel } from 'types/offer-item.ts';
import CartItem from 'components/offer-components/cart-item';

type FavoritesOffersProps = {
  city: string;
  favoritesOffers: OfferItemModel[];
};

const FavoritesOffers = ({ city, favoritesOffers }: FavoritesOffersProps) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoritesOffers.map((offer) => (
          <CartItem key={offer.id} offer={offer} typeCard="favorites" />
        ))}
      </div>
    </li>
  );
};

export default FavoritesOffers;
