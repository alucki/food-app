import React from 'react';
import {
  HeaderContainer,
  LinksContainer,
  NavLink,
  HomeLink,
  StyledUl,
} from './header.styled';

export const Header = () => (
  <HeaderContainer>
    <HomeLink to="/">Recipes App</HomeLink>
    <LinksContainer>
      <StyledUl>
        <li>
          <NavLink to="/recipes">My Recipes</NavLink>
        </li>
        <li>
          <NavLink to="/lucky-dip">Lucky dip</NavLink>
        </li>
      </StyledUl>
    </LinksContainer>
  </HeaderContainer>
);
