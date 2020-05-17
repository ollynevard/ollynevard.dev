import React from 'react';

import SiteName from '../SiteName';
import Nav from '../Nav';
import NavItem from '../NavItem';
import { HeaderContainer, HeaderInner } from './style';

const Header = () => (
  <HeaderContainer>
    <HeaderInner>
      <SiteName to="/">Olly Nevard</SiteName>
      <Nav>
        <NavItem to="/articles">Articles</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/about">About</NavItem>
      </Nav>
    </HeaderInner>
  </HeaderContainer>
);

export default Header;
