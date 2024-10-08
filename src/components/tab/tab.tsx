import clsx from 'clsx';
import { useAppDispatch } from 'hooks/store';
import { CityNameModel } from 'types/city-name.ts';
import { offersAction } from 'store/slices/offers.ts';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

type TabProps = {
  city: CityNameModel;
  currentCity: CityNameModel;
};

const Tab = ({ city, currentCity }: TabProps) => {
  const dispatch = useAppDispatch();
  const isActiveTab = useMemo(
    () => (currentCity === city ? 'tabs__item--active' : 'tabs__item'),
    [currentCity, city],
  );

  return (
    <li
      onClick={(evt) => {
        evt.preventDefault();
        dispatch(offersAction.setCity(city));
      }}
      className="locations__item"
    >
      <Link className={clsx('locations__item-link', isActiveTab)} to="#">
        <span>{city}</span>
      </Link>
    </li>
  );
};

export default Tab;
