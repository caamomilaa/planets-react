import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import { StyledContainer } from './header.styles';

const Header = () => {
  return (
    <>
      <StyledContainer>
        <Link to='/'>
          <Logo />
        </Link>
      </StyledContainer>
      <Menu />
    </>
  );
};
export default Header;
