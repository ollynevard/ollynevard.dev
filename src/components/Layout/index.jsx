import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@emotion/react';
import { Helmet } from 'react-helmet';

import theme from 'theme';
import Footer from '../Footer';
import { GlobalStyles, LayoutContainer, Main } from './style';

const Layout = ({ children, showHeader, showFooter }) => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <LayoutContainer>
      <GlobalStyles />
      {showHeader}
      <Main>{children}</Main>
      {showFooter && <Footer />}
    </LayoutContainer>
  </ThemeProvider>
);

Layout.defaultProps = {
  showHeader: true,
  showFooter: true,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showHeader: PropTypes.bool,
  showFooter: PropTypes.bool,
};

export default Layout;
