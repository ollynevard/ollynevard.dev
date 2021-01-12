import styled from '@emotion/styled';

export const NavContainer = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`;
