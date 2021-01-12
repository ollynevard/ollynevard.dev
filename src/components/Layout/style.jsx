import React from 'react';
import styled from '@emotion/styled';
import { css, useTheme, Global } from '@emotion/react';

export const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        ::selection {
          background: ${theme.colors.blue};
        }

        html {
          height: 100%;
        }

        body {
          background-color: ${theme.colors.grey1};
          color: ${theme.colors.grey6};
          font-family: ${theme.fonts.mono};
          font-size: 20px;
          font-variant-ligatures: discretionary-ligatures;
          font-weight: 400;
          height: 100%;
          margin: 0;
          -webkit-font-smoothing: antialiased;
        }

        #___gatsby,
        #gatsby-focus-wrapper {
          height: 100%;
        }

        @font-face {
          font-display: swap;
          font-family: 'JetBrains Mono';
          font-style: normal;
          font-weight: 400;
          src: url('/fonts/jetbrains-mono-v1-latin-regular.eot');
          src: local(''),
            url('/fonts/jetbrains-mono-v1-latin-regular.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/jetbrains-mono-v1-latin-regular.woff2') format('woff2'),
            url('/fonts/jetbrains-mono-v1-latin-regular.woff') format('woff'),
            url('/fonts/jetbrains-mono-v1-latin-regular.ttf') format('truetype'),
            url('/fonts/jetbrains-mono-v1-latin-regular.svg#JetBrainsMono')
              format('svg');
        }

        @font-face {
          font-display: swap;
          font-family: 'JetBrains Mono';
          font-style: normal;
          font-weight: 600;
          src: url('/fonts/jetbrains-mono-v1-latin-600.eot'); /* IE9 Compat Modes */
          src: local(''),
            url('/fonts/jetbrains-mono-v1-latin-600.eot?#iefix')
              format('embedded-opentype'),
            url('/fonts/jetbrains-mono-v1-latin-600.woff2') format('woff2'),
            url('/fonts/jetbrains-mono-v1-latin-600.woff') format('woff'),
            url('/fonts/jetbrains-mono-v1-latin-600.ttf') format('truetype'),
            url('/fonts/jetbrains-mono-v1-latin-600.svg#JetBrainsMono')
              format('svg');
        }
      `}
    />
  );
};

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Main = styled.main`
  flex-grow: 1;
  margin: 0 auto;
  max-width: 1200px;
  padding: 40px;
  width: 100%;
`;
