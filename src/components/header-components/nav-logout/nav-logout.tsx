import { Link } from 'react-router-dom';
import { AppRoute } from 'const/const.ts';
import { UserModel } from 'types/user.ts';
import useNavLogout from 'hooks/use-nav-login';
import './nav-logout.css';

type NavLoginProps = {
  info: UserModel;
};

const NavLogout = ({ info }: NavLoginProps) => {
  const { favoriteCount, handleLogout } = useNavLogout();

  return (
    <>
      <li className="header__nav-item user">
        <Link
          to={AppRoute.Favorites}
          className="header__nav-link header__nav-link--profile"
        >
          <div
            className="header__avatar-wrapper user__avatar-wrapper"
            style={{ backgroundImage: `url(${info?.avatarUrl})` }}
          ></div>
          <span className="header__user-name user__name">{info.email}</span>
          <span className="header__favorite-count">{favoriteCount}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <button className="header__nav-link" onClick={handleLogout}>
          <span className="header__signout">Sign out</span>
        </button>
      </li>
    </>
  );
};

export default NavLogout;
