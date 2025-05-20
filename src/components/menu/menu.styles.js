import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import { FONT_SIZES } from '../../styles/fontSizes';
import { NavLink } from 'react-router-dom';

const StyledHamburguer = styled.img`
  width: 24px;
  height: 17px;
  position: absolute;
  left: 327px;
  top: 26px;
  opacity: ${({ $isOpen }) => ($isOpen ? '50%' : '100%')};
`;

const StyledMenu = styled.ul`
  position: absolute;
  width: 100%;
  transition: translate 0.5s;
  translate: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  height: calc(100vh - 80px);
  padding-top: 24px;
  background-color: ${COLORS.primary500};

  /* hay un scroll raro */
`;

const StyledMenuItem = styled.li`
  display: flex;

  padding: 25px 37px 25px 64px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 1px solid ${COLORS.primary300};

  &::before {
    content: '';
    position: absolute;
    width: 20px;
    left: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ $color }) => $color};
  }
`;

const StyledMenuLink = styled(NavLink)`
  color: ${COLORS.white};
  font-weight: 700;
  font-size: 0.9375rem;
`;

export { StyledMenuLink, StyledMenu, StyledMenuItem, StyledHamburguer };
