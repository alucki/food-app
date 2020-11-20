import styled from 'styled-components';
import { morningBlue, yellowRed } from '../colors/colors';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  background: linear-gradient(rgba(246, 189, 96, 0.5), ${yellowRed});
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
`;

export const LinksContainer = styled.nav`
  width: 35%;
`;

export const NavLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:focus {
    color: ${morningBlue};
  }

  &:hover {
    color: ${morningBlue};
  }

  &:active {
    color: ${morningBlue};
  }
`;

export const HomeLink = styled(NavLink)`
  font-size: 24px;

  &:focus {
    color: inherit;
  }

  &:hover {
    color: inherit;
  }

  &:active {
    color: inherit;
  }
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`;
