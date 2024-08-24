import { useAppDispatch, useAppSelector } from 'hooks/store';
import { logout } from 'store/thunks/auth';
import { offersSelectors } from 'store/slices/offers.ts';

function useNavLogout() {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(offersSelectors.offers);
  const favoriteCount = offers.filter(
    (item) => item.isFavorite === true,
  ).length;
  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    favoriteCount,
    handleLogout,
  };
}

export default useNavLogout;
