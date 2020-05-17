import React from 'react';
import PropTypes from 'prop-types';

import { SiteNameContainer, SiteNameLink } from './style';

const SiteName = ({ to, children }) => (
  <SiteNameContainer>
    <SiteNameLink to={to}>{children}</SiteNameLink>
  </SiteNameContainer>
);

SiteName.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default SiteName;
