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
