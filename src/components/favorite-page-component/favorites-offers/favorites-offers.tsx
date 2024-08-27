import { OfferItemModel } from 'types/offer-item.ts';
import CartItem from 'components/offer-components/cart-item';
import { Link } from 'react-router-dom';

type FavoritesOffersProps = {
  city: string;
  favoritesOffers: OfferItemModel[];
};

const FavoritesOffers = ({ city, favoritesOffers }: FavoritesOffersProps) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="#">
            <span>{city}</span>
          </Link>
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
