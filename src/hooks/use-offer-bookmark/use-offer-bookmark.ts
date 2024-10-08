import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { changeFavorite } from 'store/thunks/favorites.ts';
import { AppRoute, AuthorizationStatus } from 'const/const.ts';
import { userSelectors } from 'store/slices/user.ts';
import { FavoriteStatusModel } from 'types/favorite-status.ts';

export function useOfferBookmark(initialIsFavorite: boolean, offerId: string) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  const userStatus = useAppSelector(userSelectors.status);

  const isFavoriteText =
    userStatus === AuthorizationStatus.Auth && isFavorite
      ? 'In bookmarks'
      : 'To bookmarks';

  const handleClick = useCallback(() => {
    if (userStatus === AuthorizationStatus.Auth) {
      const newStatus = !isFavorite;
      setIsFavorite(newStatus);
      const favoriteStatus: FavoriteStatusModel = newStatus ? 1 : 0;
      dispatch(changeFavorite({ offerId, status: favoriteStatus }));
    } else {
      navigate(AppRoute.Login);
    }
  }, [dispatch, isFavorite, offerId, userStatus, navigate]);

  return {
    isFavorite,
    isFavoriteText,
    handleClick,
  };
}
