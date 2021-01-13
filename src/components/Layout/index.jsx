import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@emotion/react';
import { Helmet } from 'react-helmet';

import theme from 'theme';
import SEO from '../SEO';
import Footer from '../Footer';
import { GlobalStyles, LayoutContainer, Main } from './style';

const Layout = ({ children, showHeader, showFooter }) => (
  <ThemeProvider theme={theme}>
    <SEO />
    <Helmet>
      <html lang="en-GB" />
      <script
        async
        defer
        data-domain="ollynevard.dev"
        src="https://plausible.io/js/plausible.js"
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
