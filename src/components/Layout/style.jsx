import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

export const GlobalStyles = () => (
  <Global
    styles={css`
      html {
        height: 100%;
      }

      body {
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
