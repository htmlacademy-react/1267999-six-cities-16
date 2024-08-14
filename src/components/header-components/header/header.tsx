import Logo from 'components/logo';
import HeaderNav from 'components/header-components/header-nav';

type HeaderProps = {
  withNav?: boolean;
};

const Header = ({ withNav = true }: HeaderProps) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo type="header" />
          </div>
          {withNav && <HeaderNav />}
        </div>
      </div>
    </header>
  );
};

export default Header;
