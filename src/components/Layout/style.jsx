import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

export const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        html {
          height: 100%;
        }

        body {
          background-color: ${theme.colors.background};
          color: ${theme.colors.text};
          height: 100%;
          margin: 0;
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
  height: 100%;
  margin: 0 auto;
  max-width: 960px;
  padding: 20px;
  width: 100%;
`;
