import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
`;

export const LinksContainer = styled.nav``;

export const NavLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: black;
  padding: 0 10px;

  &:visited {
    color: black;
  }

  &:focus {
    color: black;
  }

  &:hover {
    color: black;
  }

  &:active {
    color: black;
  }
`;

export const HomeLink = styled(NavLink)`
  font-size: 40px;

  &:visited {
    color: black;
  }

  &:focus {
    color: black;
  }

  &:hover {
    color: black;
  }

  &:active {
    color: black;
  }
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`;
