import React from 'react';
import PropTypes from 'prop-types';

import { NavContainer, NavList } from './style';

const Nav = ({ children }) => (
  <NavContainer>
    <NavList>{children}</NavList>
  </NavContainer>
);

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Nav;
