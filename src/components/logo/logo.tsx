import { AppRoute } from 'const/const.ts';
import { Link } from 'react-router-dom';
import { SizesLogo } from './const.ts';

type LogoProps = {
  type: 'header' | 'footer';
};

const Logo = ({ type }: LogoProps) => {
  const size = SizesLogo[type];
  const logoImage = 'img/logo.svg';
  return (
    <Link to={AppRoute.Main} className={`${type}__logo-link`}>
      <img
        className={`${type}__logo`}
        src={logoImage}
        alt="6 cities logo"
        width={size.width}
        height={size.height}
      />
    </Link>
  );
};

export default Logo;
