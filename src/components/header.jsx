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
    <HomeLink to="/">Let's eat!</HomeLink>
    <LinksContainer>
      <StyledUl>
        <li>
          <NavLink to="/area">Area</NavLink>
        </li>
        <li>
          <NavLink to="/category">Category</NavLink>
        </li>
        <li>
          <NavLink to="/lucky-dip">Lucky dip</NavLink>
        </li>
      </StyledUl>
    </LinksContainer>
  </HeaderContainer>
);
