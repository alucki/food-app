import styled from 'styled-components';
import { yellowRed } from '../colors/colors';

export const HeaderContainer = styled.div`
  font-size: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  background: linear-gradient(rgba(246, 189, 96, 0.5), ${yellowRed});
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;
`;

export const NavLink = styled.a`
  font-size: 20px;
`;
