import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';
import { GlobalStyles, LayoutContainer, Main } from './style';

const Layout = ({ children }) => (
  <LayoutContainer>
    <GlobalStyles />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </LayoutContainer>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
