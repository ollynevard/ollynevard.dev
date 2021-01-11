/** @jsx jsx */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

import {
  NavItemContainer,
  NavItemInternalLink,
  NavItemExternalLink,
} from './style';

const NavItem = ({ to, children, icon }) => {
  const margin = icon ? '5px' : 0;

  return (
    <NavItemContainer>
      {to.startsWith('/') ? (
        <NavItemInternalLink to={to}>
          {icon}
          <span css={{ marginLeft: margin }}>{children}</span>
        </NavItemInternalLink>
      ) : (
        <NavItemExternalLink href={to}>
          {icon}
          <span css={{ marginLeft: margin }}>{children}</span>
        </NavItemExternalLink>
      )}
    </NavItemContainer>
  );
};

NavItem.defaultProps = {
  icon: null,
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
};

export default NavItem;
