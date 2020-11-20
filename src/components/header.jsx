import React from 'react';
import {
  HeaderContainer,
  LinksContainer,
  NavLink,
} from './header.styled';

export const Header = () => (
  <HeaderContainer>
    What should you eat?
    <LinksContainer>
      <NavLink>Area</NavLink>
      <NavLink>Category</NavLink>
      <NavLink>Lucky dip</NavLink>
    </LinksContainer>
  </HeaderContainer>
);
