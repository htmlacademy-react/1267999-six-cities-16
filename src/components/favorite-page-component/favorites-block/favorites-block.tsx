import FavoritesOffers from 'components/favorite-page-component/favorites-offers';
import { OfferItemModel } from 'types/offer-item.ts';

type FavoritesBlockProps = {
  favoriteOffersByCity: {
    [key: string]: OfferItemModel[];
  };
};

const FavoritesBlock = ({ favoriteOffersByCity }: FavoritesBlockProps) => {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(favoriteOffersByCity).map(([city, favoritesOffers]) => (
          <FavoritesOffers
            key={city}
            city={city}
            favoritesOffers={favoritesOffers}
          />
        ))}
      </ul>
    </section>
  );
};

export default FavoritesBlock;
