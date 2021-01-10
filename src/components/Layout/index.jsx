import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@emotion/react';
import { Helmet } from 'react-helmet';

import theme from '../../theme';
import Header from '../Header';
import Footer from '../Footer';
import { GlobalStyles, LayoutContainer, Main } from './style';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/ugi8yzu.css" />
    </Helmet>
    <LayoutContainer>
      <GlobalStyles />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
