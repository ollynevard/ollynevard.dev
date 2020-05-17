import React from 'react';
import PropTypes from 'prop-types';

import { NavItemContainer, NavItemLink } from './style';

const NavItem = ({ to, children }) => (
  <NavItemContainer>
    <NavItemLink to={to}>{children}</NavItemLink>
  </NavItemContainer>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavItem;
